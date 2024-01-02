import getAlgoliaIndex from '@utils/getAlgoliaClient'
import { IndexCircle, IndexRole } from './circle'
import { IndexDecision } from './decision'
import { IndexMeeting } from './meeting'
import { IndexMeetingAttendee } from './meeting_attendee'
import { IndexMeetingRecurring } from './meeting_recurring'
import { IndexMeetingStep } from './meeting_step'
import { IndexMember } from './member'
import { IndexTask } from './task'
import { IndexThread, IndexThreadActivity } from './thread'

export const indexTables = [
  IndexCircle,
  IndexDecision,
  IndexMeeting,
  IndexMeetingRecurring,
  IndexMeetingStep,
  IndexMeetingAttendee,
  IndexMember,
  IndexRole,
  IndexTask,
  IndexThread,
  IndexThreadActivity,
]

export async function reindexAll() {
  const index = getAlgoliaIndex()
  for (const IndexTable of indexTables) {
    console.log(`Indexing ${IndexTable.table}...`)
    const docs = await new IndexTable().getAll()
    await index.saveObjects(docs)
    console.log(`Indexed ${docs.length} docs.`)
  }
}
