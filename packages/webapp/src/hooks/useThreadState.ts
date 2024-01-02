import {
  CircleSummaryFragment,
  ThreadActivityFragment,
  ThreadFragment,
  ThreadMemberStatusFragment,
  Thread_Activity_Type_Enum,
  useThreadActivitiesLogsSubscription,
  useThreadSubscription,
  useUpsertThreadMemberStatusMutation,
} from '@gql'
import useCircle from '@hooks/useCircle'
import useCircleParticipants from '@hooks/useCircleParticipants'
import useCurrentMember from '@hooks/useCurrentMember'
import useOrgAdmin from '@hooks/useOrgAdmin'
import useOrgMember from '@hooks/useOrgMember'
import { ParticipantMember } from '@shared/model/member'
import { ThreadActivityChangeStatusFragment } from '@shared/model/thread_activity'
import { useCallback, useEffect, useMemo } from 'react'
import useExtraParticipants from './useExtraParticipants'
import { usePathInOrg } from './usePathInOrg'

/***
 * Thread state hook
 * /!\ Do not call this too often
 * Consider using ThreadContext instead
 */

export interface ThreadState {
  thread: ThreadFragment | undefined
  memberStatus: ThreadMemberStatusFragment | undefined
  activities: ThreadActivityFragment[] | undefined
  loading: boolean
  error: Error | undefined
  path: string
  circle: CircleSummaryFragment | undefined
  participants: ParticipantMember[]
  canEdit: boolean
  canParticipate: boolean
  isParticipant: boolean
  handleScrollToActivity(activityId: string): void
  handleMarkUnread(activityId: string): void
}

export default function useThreadState(threadId: string): ThreadState {
  const currentMember = useCurrentMember()
  const isMember = useOrgMember()
  const isAdmin = useOrgAdmin()
  const [upsertThreadMemberStatus] = useUpsertThreadMemberStatusMutation()

  // Subscribe to thread
  const threadResult = useThreadSubscription({
    skip: !currentMember,
    variables: {
      id: threadId,
      memberId: currentMember?.id!,
    },
  })
  const thread = threadResult.data?.thread_by_pk || undefined
  const memberStatus = thread?.member_status?.[0]

  // Subscribe to activities and logs
  const activitiesLogsResult = useThreadActivitiesLogsSubscription({
    variables: { id: threadId },
  })

  const activities =
    activitiesLogsResult.data?.thread_by_pk?.activities
      // Sort activities here because we need order before injectig logs
      .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)) || undefined
  const threadLogs = activitiesLogsResult.data?.thread_by_pk?.logs || undefined

  // Meeting page path
  const path = usePathInOrg(`threads/${thread?.id}`)

  // Circle
  const circle = useCircle(thread?.circleId)

  // Participants
  const circleParticipants = useCircleParticipants(circle)
  const participants = useExtraParticipants(
    circleParticipants,
    thread?.extra_members
  )

  // Is current member participant?
  const isParticipant = currentMember
    ? participants.some((p) => p.member.id === currentMember.id)
    : false
  const canEdit = isMember && (isParticipant || isAdmin)
  const canParticipate = isMember

  // Scroll to an activity
  const handleScrollToActivity = useCallback((stepId: string) => {
    document
      .getElementById(`activity-${stepId}`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Mark an activity as unread
  const handleMarkUnread = useCallback(
    (activityId: string) => {
      if (!activities || !currentMember) return
      const activityIndex = activities.findIndex((a) => a.id === activityId)
      if (activityIndex === -1) {
        throw new Error('Activity not found')
      }
      const prevActivity = activities[activityIndex - 1]

      upsertThreadMemberStatus({
        variables: {
          values: {
            threadId,
            memberId: currentMember.id,
            lastReadActivityId: prevActivity?.id || null,
            lastReadDate: new Date().toISOString(),
          },
        },
      })
    },
    [activities, threadId, currentMember]
  )

  // Scroll to next unread activity when activities are loaded
  useEffect(() => {
    const activityId = memberStatus?.lastReadActivityId
    if (!activityId || !activities || !thread) return
    const activityIndex = activities.findIndex((a) => a.id === activityId)
    if (activityIndex === -1) return
    const nextActivityId = activities[activityIndex + 1]?.id
    setTimeout(() => {
      handleScrollToActivity(nextActivityId || activityId)
    }, 500)
  }, [!thread, !activities])

  // Update member status when there is a new activity
  useEffect(() => {
    if (!activities || !thread || !currentMember) {
      return
    }

    // Already up to date?
    const lastActivityId = activities[activities.length - 1]?.id || null
    if (memberStatus?.lastReadActivityId === lastActivityId) {
      return
    }

    // Save new status
    upsertThreadMemberStatus({
      variables: {
        values: {
          threadId,
          memberId: currentMember.id,
          lastReadActivityId: lastActivityId,
          lastReadDate: new Date().toISOString(),
        },
      },
    })
  }, [activities])

  const threadLogsActivity = useMemo(() => {
    if (!thread || !threadLogs) {
      return undefined
    }

    return threadLogs.map((log) => {
      return {
        id: log.id,
        type: Thread_Activity_Type_Enum.ChangeStatus,
        userId: log.userId,
        createdAt: log.createdAt,
        data: {
          ...log,
        },
      } as ThreadActivityChangeStatusFragment
    })
  }, [thread, threadLogs])

  // Merge activities and logs sorted by createdAt asc
  const concatThreadLogsActivities = useMemo(() => {
    if (!activities || !threadLogsActivity) {
      return undefined
    }

    return activities
      .concat(threadLogsActivity || [])
      .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
  }, [activities, threadLogsActivity])

  return {
    thread,
    memberStatus,
    activities: concatThreadLogsActivities,
    loading: threadResult.loading || activitiesLogsResult.loading,
    error: threadResult.error || activitiesLogsResult.error,
    path,
    circle,
    participants,
    canEdit,
    canParticipate,
    isParticipant,
    handleScrollToActivity,
    handleMarkUnread,
  }
}
