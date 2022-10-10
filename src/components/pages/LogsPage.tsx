import { Container, Flex, Heading } from '@chakra-ui/react'
import Loading from '@components/atoms/Loading'
import TextErrors from '@components/atoms/TextErrors'
import { Title } from '@components/atoms/Title'
import LogsList from '@components/molecules/LogsList'
import { useOrgId } from '@hooks/useOrgId'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSubscribeLastLogsSubscription } from 'src/graphql.generated'

export default function LogsPage() {
  const { t } = useTranslation()
  const orgId = useOrgId()

  // Subscribe to logs
  const { data, error, loading } = useSubscribeLastLogsSubscription({
    skip: !orgId,
    variables: { orgId: orgId! },
  })
  const logs = data?.log

  return (
    <Container maxW="xl" py={10}>
      <Title>{t('LogsPage.heading')}</Title>

      <Flex mb={5} alignItems="center" flexWrap="wrap">
        <Heading as="h1" size="md">
          {t('LogsPage.heading')}
        </Heading>
      </Flex>

      {loading && <Loading active center />}
      <TextErrors errors={[error]} />

      {logs && <LogsList logs={logs} />}
    </Container>
  )
}
