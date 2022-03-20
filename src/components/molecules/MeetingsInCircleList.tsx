import { subscribeMeetingsByCircle } from '@api/entities/meetings'
import {
  Button,
  HStack,
  LinkBox,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import Loading from '@components/atoms/Loading'
import MeetingLinkOverlay from '@components/atoms/MeetingLinkOverlay'
import TextErrors from '@components/atoms/TextErrors'
import MeetingEditModal from '@components/organisms/modals/MeetingEditModal'
import MeetingModal from '@components/organisms/modals/MeetingModal'
import { useHoverItemStyle } from '@hooks/useHoverItemStyle'
import useSubscription from '@hooks/useSubscription'
import { useStoreState } from '@store/hooks'
import { format, isSameDay } from 'date-fns'
import React, { useState } from 'react'
import { FiCalendar, FiPlus } from 'react-icons/fi'
import { dateFnsLocale } from 'src/locale'
import { capitalizeFirstLetter } from 'src/utils'

interface Props {
  circleId: string
}

export default function MeetingsInCircleList({ circleId }: Props) {
  const orgId = useStoreState((state) => state.orgs.currentId)
  const hover = useHoverItemStyle()

  const {
    data: meetings,
    error,
    loading,
  } = useSubscription(
    orgId ? subscribeMeetingsByCircle(orgId, circleId) : undefined
  )

  // Meeting modal
  const [meetingId, setMeetingId] = useState<string | undefined>()
  const {
    isOpen: isMeetingOpen,
    onOpen: onMeetingOpen,
    onClose: onMeetingClose,
  } = useDisclosure()

  // Create Meeting modal
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure()

  const handleCreate = (id: string) => {
    setMeetingId(id)
    onMeetingOpen()
  }

  return (
    <>
      <Button size="sm" mb={4} leftIcon={<FiPlus />} onClick={onCreateOpen}>
        Créer une réunion
      </Button>

      {loading && <Loading active size="md" />}
      <TextErrors errors={[error]} />

      {meetings && (
        <VStack spacing={0} align="stretch">
          {meetings.length === 0 && <i>Aucune réunion pour le moment</i>}

          {meetings.map((meeting, i) => {
            const date = meeting.startDate.toDate()
            return (
              <React.Fragment key={meeting.id}>
                {(i === 0 ||
                  !isSameDay(date, meetings[i - 1].startDate.toDate())) && (
                  <Text px={2} fontSize="sm">
                    {capitalizeFirstLetter(
                      format(date, 'PPPP ', {
                        locale: dateFnsLocale,
                      })
                    )}
                  </Text>
                )}

                <LinkBox key={meeting.id} px={2} py={1} _hover={hover}>
                  <HStack spacing={3} align="stretch" alignItems="center">
                    <FiCalendar />
                    <MeetingLinkOverlay meeting={meeting} />
                  </HStack>
                </LinkBox>
              </React.Fragment>
            )
          })}
        </VStack>
      )}

      {isMeetingOpen && meetingId && (
        <MeetingModal id={meetingId} isOpen onClose={onMeetingClose} />
      )}

      {isCreateOpen && (
        <MeetingEditModal
          defaultCircleId={circleId}
          isOpen
          onClose={onCreateClose}
          onCreate={handleCreate}
        />
      )}
    </>
  )
}
