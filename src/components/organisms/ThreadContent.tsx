import { subscribeThread } from '@api/entities/threads'
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Spacer,
  Tag,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import CircleButton from '@components/atoms/CircleButton'
import Loading from '@components/atoms/Loading'
import { Title } from '@components/atoms/Title'
import ActionsMenu from '@components/molecules/ActionsMenu'
import ThreadActivityCreate from '@components/molecules/ThreadActivityCreate'
import ThreadEditModal from '@components/organisms/modals/ThreadEditModal'
import ThreadActivities from '@components/organisms/ThreadActivities'
import Page404 from '@components/pages/Page404'
import useCircle from '@hooks/useCircle'
import useParticipants from '@hooks/useParticipants'
import useScrollable, { ScrollPosition } from '@hooks/useScrollable'
import useSubscription from '@hooks/useSubscription'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ThreadContext } from 'src/contexts/ThreadContext'
import ParticipantsNumber from '../atoms/ParticipantsNumber'

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

  // Subscribe thread
  const { data: thread, error, loading } = useSubscription(subscribeThread(id))

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
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure()

  const { colorMode } = useColorMode()
  const shadowColor =
    colorMode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'

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
        <Heading as="h1" size="md">
          {thread?.title || (loading ? '…' : null)}
        </Heading>

        {thread?.archived && (
          <Tag ml={2}>{t('organisms.ThreadContent.archived')}</Tag>
        )}

        <Spacer />

        <Flex mr={headerIcons ? -2 : 0}>
          {circle && <CircleButton circle={circle} ml={5} />}

          <ParticipantsNumber participants={participants} ml={1} />

          <ActionsMenu onEdit={onEditOpen} ml={2} />

          {headerIcons}
        </Flex>
      </Flex>

      <Box ref={containerRef} flex={1} overflow="auto" onScroll={handleScroll}>
        <ThreadContext.Provider value={thread}>
          <ThreadActivities ref={contentRef} />
        </ThreadContext.Provider>
      </Box>

      {thread && (
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

      {isEditOpen && (
        <ThreadEditModal isOpen thread={thread} onClose={onEditClose} />
      )}
    </Box>
  )
}
