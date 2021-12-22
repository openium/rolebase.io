import {
  subscribeMeetingsByDates,
  updateMeetingDates,
} from '@api/entities/meetings'
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'
import Loading from '@components/atoms/Loading'
import TextErrors from '@components/atoms/TextErrors'
import MeetingModal from '@components/organisms/modals/MeetingModal'
import MeetingEditModal from '@components/organisms/modals/MeetingModalEdit'
import {
  DatesSetArg,
  EventChangeArg,
  EventClickArg,
} from '@fullcalendar/common'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar, { EventContentArg, EventInput } from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import useEntitiesFilterMenu from '@hooks/useEntitiesFilterMenu'
import useFilterEntities from '@hooks/useFilterEntities'
import useSubscription from '@hooks/useSubscription'
import { enrichCircleWithRole } from '@shared/helpers/enrichCirclesWithRoles'
import { EntityFilters } from '@shared/types'
import { useStoreState } from '@store/hooks'
import React, { useCallback, useMemo, useState } from 'react'
import { FiChevronDown, FiPlus } from 'react-icons/fi'

export default function MeetingsPage() {
  const getCircleById = useStoreState((state) => state.circles.getById)
  const roles = useStoreState((state) => state.roles.entries)

  // Circles filter menu
  const {
    filter,
    value: filterValue,
    handleChange: handleFilterChange,
  } = useEntitiesFilterMenu()

  // Dates range
  const [datesRange, setDatesRange] = useState<[Date, Date] | undefined>(
    undefined
  )

  // Subscribe to meetings
  const orgId = useStoreState((state) => state.orgs.currentId)

  // Subscribe to meetings
  const { data, error, loading } = useSubscription(
    orgId && datesRange
      ? subscribeMeetingsByDates(orgId, datesRange[0], datesRange[1])
      : undefined
  )

  // Filter meetings
  const meetings = useFilterEntities(filter, data)

  // Prepare events for Fullcalendar
  const events = useMemo(
    () =>
      meetings?.map((meeting): EventInput => {
        let title = meeting.title
        let roleName = undefined

        // Add role name to title
        const circle = getCircleById(meeting.circleId)
        if (circle && roles) {
          const circleWithRole = enrichCircleWithRole(circle, roles)
          roleName = circleWithRole?.role.name
        }

        return {
          id: meeting.id,
          title,
          eventContent: { html: '<i>some html</i>' },
          start: meeting.startDate.toDate(),
          end: meeting.endDate.toDate(),
          backgroundColor: 'hsl(192deg 76% 85%)',
          borderColor: 'hsl(192deg 76% 50%)',
          textColor: 'black',
          extendedProps: {
            roleName,
          },
        }
      }),
    [meetings, roles]
  )

  // Customize event title
  const handleEventContent = useCallback(
    (eventContent: EventContentArg) => {
      const {
        title,
        extendedProps: { roleName },
      } = eventContent.event
      const view = eventContent.view.type
      return {
        html: `
          <div style="overflow: hidden;">
            <span style="
                padding: 2px 4px;
              ">
              ${title}
            </span>
            ${view === 'listWeek' ? '' : '<br />'}
            <div style="
                width: fit-content;
                display: inline-block;
                background: hsl(192deg 76% 93%);
                padding: 2px 4px;
                border-radius: 10px;
              ">
              ${roleName}
            </div>
          </div>`,
      }
    },
    [roles]
  )

  const handleCreate = useCallback(() => {
    setStartDate(undefined)
    onCreateOpen()
  }, [])

  const handleEventClick = useCallback(
    ({ event }: EventClickArg) => {
      const meeting = meetings?.find((m) => m.id === event.id)
      if (!meeting) return
      setMeetingId(meeting.id)
      onMeetingOpen()
    },
    [meetings]
  )

  const handleDateClick = useCallback(
    ({ date }: { date: Date }) => {
      setStartDate(date)
      onCreateOpen()
    },
    [meetings]
  )

  const handleDatesChange = useCallback(
    ({ start, end }: DatesSetArg) => {
      setDatesRange([start, end])
    },
    [meetings]
  )

  const handleEventChange = useCallback(({ event }: EventChangeArg) => {
    if (!event.start || !event.end) return
    updateMeetingDates(event.id, event.start, event.end)
  }, [])

  // Meeting Modal
  const [meetingId, setMeetingId] = useState<string | undefined>()
  const {
    isOpen: isMeetingOpen,
    onOpen: onMeetingOpen,
    onClose: onMeetingClose,
  } = useDisclosure()

  // Create meeting Modal
  const [startDate, setStartDate] = useState<Date | undefined>()
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure()

  return (
    <Box
      h="100vh"
      px={5}
      pb={5}
      pt="70px"
      display="flex"
      flexDirection="column"
    >
      {loading && <Loading active center />}
      <TextErrors errors={[error]} />

      <Flex mb={1}>
        <Heading as="h1" size="md">
          Réunions
        </Heading>

        <Spacer />

        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="ghost" rightIcon={<FiChevronDown />}>
            Filtres
          </MenuButton>
          <MenuList zIndex={2}>
            <MenuOptionGroup
              title="Participation"
              type="checkbox"
              value={filterValue}
              onChange={handleFilterChange}
            >
              <MenuItemOption value={EntityFilters.Invited}>
                Mes réunions
              </MenuItemOption>
              <MenuItemOption value={EntityFilters.NotInvited}>
                Autres réunions
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <Button ml={1} leftIcon={<FiPlus />} onClick={handleCreate}>
          Nouvelle réunion
        </Button>
      </Flex>

      <Box flex={1}>
        <FullCalendar
          events={events}
          height="100%"
          locale="fr"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          initialView="timeGridWeek"
          weekends={false}
          allDaySlot={false}
          nowIndicator
          editable
          eventContent={handleEventContent}
          dateClick={handleDateClick}
          scrollTime="08:00:00"
          eventClick={handleEventClick}
          eventChange={handleEventChange}
          datesSet={handleDatesChange}
        />
      </Box>

      {isMeetingOpen && meetingId && (
        <MeetingModal id={meetingId} isOpen onClose={onMeetingClose} />
      )}

      {isCreateOpen && (
        <MeetingEditModal
          defaultStartDate={startDate}
          isOpen
          onClose={onCreateClose}
        />
      )}
    </Box>
  )
}
