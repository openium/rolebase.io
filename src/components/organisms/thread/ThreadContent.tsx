import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HStack,
  Spacer,
  Tag,
  useColorMode,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react'
import CircleButton from '@components/atoms/CircleButton'
import Loading from '@components/atoms/Loading'
import { Title } from '@components/atoms/Title'
import ActionsMenu from '@components/molecules/ActionsMenu'
import ParticipantsNumber from '@components/molecules/ParticipantsNumber'
import ThreadActivityCreate from '@components/molecules/ThreadActivityCreate'
import ThreadActivities from '@components/organisms/thread/ThreadActivities'
import ThreadEditModal from '@components/organisms/thread/ThreadEditModal'
import Page404 from '@components/pages/Page404'
import useCircle from '@hooks/useCircle'
import useCurrentMember from '@hooks/useCurrentMember'
import useOrgMember from '@hooks/useOrgMember'
import useParticipants from '@hooks/useParticipants'
import useScrollable, { ScrollPosition } from '@hooks/useScrollable'
import { ThreadEntry } from '@shared/model/thread'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ThreadContext } from 'src/contexts/ThreadContext'
import {
  useSubscribeThreadSubscription,
  useUpdateThreadMutation,
} from 'src/graphql.generated'

interface Props extends BoxProps {
  id: string
  changeTitle?: boolean
  headerIcons?: React.ReactNode
}

export default function ThreadContent({
  id,
  changeTitle,
  headerIcons,
  ...boxProps
}: Props) {
  const { t } = useTranslation()
  const currentMember = useCurrentMember()
  const isMember = useOrgMember()
  const [updateThread] = useUpdateThreadMutation()

  // Subscribe thread
  const { data, loading, error } = useSubscribeThreadSubscription({
    skip: !currentMember,
    variables: { id, memberId: currentMember?.id! },
  })
  const thread = data?.thread_by_pk as ThreadEntry
  const memberStatus = data?.thread_by_pk?.member_status[0]

  // Circle
  const circle = useCircle(thread?.circleId)

  // Participants
  const participants = useParticipants(
    thread?.circleId,
    thread?.participantsScope,
    thread?.participantsMembersIds
  )

  // Scrollable content
  const {
    containerRef,
    contentRef,
    isScrollable,
    scrollPosition,
    handleScroll,
  } = useScrollable()

  // Create modal
  const editModal = useDisclosure()

  // Theme
  const { colorMode } = useColorMode()
  const shadowColor =
    colorMode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'

  // Archive / unarchive
  const handleArchive = useCallback(
    () => updateThread({ variables: { id, values: { archived: true } } }),
    [id]
  )
  const handleUnarchive = useCallback(
    () => updateThread({ variables: { id, values: { archived: false } } }),
    [id]
  )

  if (error) {
    return <Page404 />
  }

  return (
    <Box mx={5} display="flex" flexDirection="column" {...boxProps}>
      {changeTitle && <Title>{thread?.title || '…'}</Title>}

      {loading && <Loading active center />}

      <Flex
        pb={2}
        position="relative"
        zIndex={1}
        boxShadow={
          isScrollable && scrollPosition !== ScrollPosition.Top
            ? `0 6px 11px -10px ${shadowColor}`
            : 'none'
        }
      >
        <Wrap spacing={2} flex={1} align="center">
          <Heading as="h1" size="md">
            {thread?.title || (loading ? '…' : null)}
          </Heading>

          <Spacer />

          <HStack spacing={2}>
            {thread?.archived && <Tag>{t('common.archived')}</Tag>}

            {circle && <CircleButton circle={circle} />}

            <Box>
              <ParticipantsNumber participants={participants} />
            </Box>
          </HStack>
        </Wrap>

        <Flex mr={headerIcons ? -2 : 0}>
          {isMember && (
            <ActionsMenu
              onEdit={editModal.onOpen}
              onArchive={!thread?.archived ? handleArchive : undefined}
              onUnarchive={thread?.archived ? handleUnarchive : undefined}
              ml={2}
            />
          )}
          {headerIcons}
        </Flex>
      </Flex>

      <Box ref={containerRef} flex={1} overflow="auto" onScroll={handleScroll}>
        <ThreadContext.Provider value={thread}>
          <ThreadActivities ref={contentRef} memberStatus={memberStatus} />
        </ThreadContext.Provider>
      </Box>

      {thread && isMember && (
        <Box
          position="relative"
          zIndex={1}
          boxShadow={
            isScrollable && scrollPosition !== ScrollPosition.Bottom
              ? `0 -6px 11px -10px ${shadowColor}`
              : 'none'
          }
        >
          <ThreadActivityCreate thread={thread} />
        </Box>
      )}

      {editModal.isOpen && (
        <ThreadEditModal isOpen thread={thread} onClose={editModal.onClose} />
      )}
    </Box>
  )
}
