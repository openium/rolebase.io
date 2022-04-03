import { subscribeThreadsByCircle } from '@api/entities/threads'
import { Button, HStack, LinkBox, Text, useDisclosure } from '@chakra-ui/react'
import Loading from '@components/atoms/Loading'
import TextErrors from '@components/atoms/TextErrors'
import ThreadLinkOverlay from '@components/atoms/ThreadLinkOverlay'
import ThreadEditModal from '@components/organisms/modals/ThreadEditModal'
import { useHoverItemStyle } from '@hooks/useHoverItemStyle'
import { useOrgId } from '@hooks/useOrgId'
import useSubscription from '@hooks/useSubscription'
import useThreadsWithStatus from '@hooks/useThreadsWithStatus'
import React from 'react'
import { FiMessageSquare, FiPlus } from 'react-icons/fi'

interface Props {
  circleId: string
}

export default function ThreadsInCircleList({ circleId }: Props) {
  const orgId = useOrgId()
  const hover = useHoverItemStyle()

  // Subscribe to threads
  const { data, error, loading } = useSubscription(
    orgId ? subscribeThreadsByCircle(orgId, circleId, false) : undefined
  )

  // Enrich with status and sort
  const threads = useThreadsWithStatus(data)

  // Thread create modal
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure()

  return (
    <>
      <Button size="sm" mb={4} leftIcon={<FiPlus />} onClick={onCreateOpen}>
        Créer une discussion
      </Button>

      {loading && <Loading active size="md" />}
      <TextErrors errors={[error]} />

      {threads?.length === 0 && <Text>Aucune discussion pour le moment</Text>}

      {threads?.map((thread) => (
        <LinkBox key={thread.id} px={2} py={1} _hover={hover}>
          <HStack spacing={3} align="stretch" alignItems="center">
            <FiMessageSquare />
            <ThreadLinkOverlay
              thread={thread}
              fontWeight={thread.read !== false ? 'normal' : 'bold'}
            />
          </HStack>
        </LinkBox>
      ))}

      {isCreateOpen && (
        <ThreadEditModal
          defaultCircleId={circleId}
          isOpen
          onClose={onCreateClose}
        />
      )}
    </>
  )
}
