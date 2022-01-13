import { LinkOverlay, LinkOverlayProps, useDisclosure } from '@chakra-ui/react'
import MeetingModal from '@components/organisms/modals/MeetingModal'
import { useNormalClickHandler } from '@hooks/useNormalClickHandler'
import { MeetingEntry } from '@shared/meeting'
import { useStoreState } from '@store/hooks'
import { format } from 'date-fns'
import React from 'react'
import { Link as ReachLink } from 'react-router-dom'
import { dateFnsLocale } from 'src/locale'

interface Props extends LinkOverlayProps {
  meeting: MeetingEntry
}

export default function MeetingLinkOverlay({
  meeting,
  ...linkOverlayProps
}: Props) {
  const orgId = useStoreState((state) => state.orgs.currentId)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleOpen = useNormalClickHandler(onOpen)
  const date = meeting.startDate.toDate()

  return (
    <>
      <LinkOverlay
        as={ReachLink}
        flex={1}
        to={`/orgs/${orgId}/meetings/${meeting.id}`}
        onClick={handleOpen}
        {...linkOverlayProps}
      >
        {format(date, 'p ', {
          locale: dateFnsLocale,
        })}{' '}
        - {meeting.title}
      </LinkOverlay>

      {isOpen && <MeetingModal id={meeting.id} isOpen onClose={onClose} />}
    </>
  )
}
