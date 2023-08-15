import { Meeting_Step_Type_Enum, Member_Role_Enum, gql } from '@gql'
import { MeetingStepDataThreads } from '@shared/model/meeting_step'
import { nameSchema } from '@shared/schemas'
import { adminRequest } from '@utils/adminRequest'
import getActivitiesEditorTextByType from '@utils/getActivitiesEditorTextByType'
import getTextFromJSONEditor from '@utils/getTextFromJSONEditor'
import { guardAuth } from '@utils/guardAuth'
import { guardBodyParams } from '@utils/guardBodyParams'
import { guardOrg } from '@utils/guardOrg'
import { RouteError, route } from '@utils/route'
import settings from '@utils/settings'
import { Configuration, OpenAIApi } from 'openai'
import * as yup from 'yup'

const configuration = new Configuration({
  apiKey: settings.openai.apiKey,
})
const openai = new OpenAIApi(configuration)

const schema = {
  type: 'object',
  required: ['summary'],
  properties: {
    summary: {
      type: 'array',
      description: 'Summary of the meeting.',
      items: {
        type: 'string',
        description: 'One sentence',
      },
    },
  },
}

const yupSchema = yup.object().shape({
  meetingId: nameSchema.required(),
  lang: yup.string().required(),
})

export default route(async (context): Promise<string> => {
  guardAuth(context)
  const { meetingId, lang } = guardBodyParams(context, yupSchema)

  const meeting = (await adminRequest(GET_MEETING_CONTENT, { meetingId }))
    .meeting_by_pk
  if (!meeting) {
    throw new RouteError(404, 'Meeting not found')
  }

  await guardOrg(meeting.orgId, Member_Role_Enum.Member, context)

  // Prepare meeting content with an array that will be joined by \n\n
  // starting with title
  const contents = [
    `# Meeting "${meeting.title}" of role "${meeting.circle.role.name}"`,
  ]

  for (const stepConfig of meeting.stepsConfig) {
    const step = meeting.steps.find((s) => stepConfig.id === s.stepConfigId)
    if (!step) continue

    const stepContents = [`## ${stepConfig.title}`]
    const notes = getTextFromJSONEditor(step.notes).trim()
    if (notes) stepContents.push(notes)

    // Add meeting notes of thread if they exist
    if (step.type === Meeting_Step_Type_Enum.Threads) {
      const { threadsIds } = step.data as MeetingStepDataThreads
      const threads = (
        await adminRequest(GET_THREADS, { meetingId, threadsIds })
      ).thread
      for (const thread of threads) {
        stepContents.push(`### ${thread.title}`)
        for (const activity of thread.activities) {
          const threadNotes = getActivitiesEditorTextByType(
            activity.data,
            activity.type
          ).trim()
          if (threadNotes) {
            stepContents.push(threadNotes)
          }
        }
      }
    }

    // Include step content only if there is more than the title
    if (stepContents.length > 1) {
      contents.push(...stepContents)
    }
  }

  const content = contents.join('\n\n')

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are a manager who reports to the entire team.
Answer in this language only: ${lang}`,
      },
      {
        role: 'user',
        content: `Summarize the most important information of the meeting in a few sentences. Titles of level 1 and 2 should not be included but give you hints about the context. No more than 8 points.
Meeting notes:

${content}`,
      },
    ],
    functions: [{ name: 'summarizeMeeting', parameters: schema }],
    function_call: { name: 'summarizeMeeting' },
    temperature: 0,
  })

  const { summary } = JSON.parse(
    response.data.choices[0]?.message?.function_call?.arguments || ''
  )

  if (!summary || summary.length === 0) {
    return ''
  }

  return `- ${summary.join('\n- ')}`
})

const GET_MEETING_CONTENT = gql(`
  query getMeetingContent($meetingId: uuid!) {
    meeting_by_pk(id: $meetingId) {
      orgId
      title
      circle {
        role {
          name
        }
      }
      stepsConfig
      steps {
        stepConfigId
        type
        data
        notes
      }
    }
  }`)

const GET_THREADS = gql(`
  query getThreadsWithMeetingNotes($meetingId: uuid!, $threadsIds: [uuid!]!) {
    thread(where:{id: {_in: $threadsIds}}) {
      title
      activities(
        where: {
          _and: { type: { _eq: MeetingNote }, refMeetingId: { _eq: $meetingId } }
        }
      ) {
        type
        data
      }
    }
  }`)
