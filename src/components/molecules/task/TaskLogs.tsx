import Loading from '@atoms/Loading'
import TextErrors from '@atoms/TextErrors'
import { Box, BoxProps } from '@chakra-ui/react'
import { useTaskLogsSubscription } from '@gql'
import { useOrgId } from '@hooks/useOrgId'
import LogsList from '@molecules/log/LogsList'
import React, { ReactNode } from 'react'

interface Props extends BoxProps {
  taskId: string
  header?: ReactNode
}

export const TaskLogs = ({ taskId, header, ...boxProps }: Props) => {
  const orgId = useOrgId()

  // Subscribe to logs
  const { data, error, loading } = useTaskLogsSubscription({
    skip: !orgId,
    variables: { taskId },
  })

  const logs = data?.log

  return (
    <>
      {loading && <Loading active size="md" />}
      <TextErrors errors={[error]} />

      {logs && logs.length !== 0 && (
        <Box w="100%">
          {header}
          <LogsList logs={logs} {...boxProps} />
        </Box>
      )}
    </>
  )
}
