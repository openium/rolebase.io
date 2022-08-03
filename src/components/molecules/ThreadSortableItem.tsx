import { subscribeThread } from '@api/entities/threads'
import { CloseIcon } from '@chakra-ui/icons'
import { IconButton, Tooltip } from '@chakra-ui/react'
import useSubscription from '@hooks/useSubscription'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useTranslation } from 'react-i18next'
import ThreadItem from './ThreadItem'

interface Props {
  threadId: string
  index: number
  onRemove?(threadId: string): void
}

export default function ThreadSortableItem({
  threadId,
  index,
  onRemove,
}: Props) {
  const { t } = useTranslation()
  const { data: thread } = useSubscription(subscribeThread(threadId))

  if (!thread) return null
  return (
    <Draggable draggableId={threadId} index={index}>
      {(provided, snapshot) => (
        <ThreadItem
          ref={provided.innerRef}
          thread={thread}
          showIcon
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {onRemove && (
            <Tooltip label={t('common.remove')} placement="top" hasArrow>
              <IconButton
                aria-label={t('common.remove')}
                size="xs"
                variant="ghost"
                icon={<CloseIcon />}
                ml={2}
                zIndex={1}
                onClick={() => onRemove(threadId)}
              />
            </Tooltip>
          )}
        </ThreadItem>
      )}
    </Draggable>
  )
}
