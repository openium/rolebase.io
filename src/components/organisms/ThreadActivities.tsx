import { subscribeActivities } from '@api/entities/activities'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  StackProps,
  VStack,
} from '@chakra-ui/react'
import Loading from '@components/atoms/Loading'
import TextErrors from '@components/atoms/TextErrors'
import ThreadActivity from '@components/molecules/ThreadActivity'
import ThreadDaySeparator from '@components/molecules/ThreadDaySeparator'
import useSubscription from '@hooks/useSubscription'
import { useStoreState } from '@store/hooks'
import React, { forwardRef, useContext } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { ThreadContext } from 'src/contexts/ThreadContext'

const ThreadActivities = forwardRef<HTMLDivElement, StackProps>(
  (stackProps, ref) => {
    const orgId = useStoreState((state) => state.orgs.currentId)
    const thread = useContext(ThreadContext)

    const {
      data: activities,
      error,
      loading,
    } = useSubscription(
      orgId && thread ? subscribeActivities(orgId, thread.id) : undefined
    )

    return (
      <VStack spacing={0} mb={2} align="stretch" ref={ref} {...stackProps}>
        {loading && <Loading active center />}
        <TextErrors errors={[error]} />

        {activities?.length === 0 && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <FiMessageSquare size={40} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Discussion créée
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Vous pouvez envoyer un premier message 👇
            </AlertDescription>
          </Alert>
        )}

        {activities &&
          activities.map((activity, i) => (
            <React.Fragment key={activity.id}>
              {(i === 0 ||
                activity.createdAt.toDate().getDay() !==
                  activities[i - 1].createdAt.toDate().getDay()) && (
                <ThreadDaySeparator date={activity.createdAt.toDate()} />
              )}
              <ThreadActivity activity={activity} />
            </React.Fragment>
          ))}
      </VStack>
    )
  }
)

export default ThreadActivities
