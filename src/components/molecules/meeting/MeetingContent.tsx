import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Collapse,
  Container,
  useDisclosure,
} from '@chakra-ui/react'
import { MeetingContext } from '@contexts/MeetingContext'
import useCreateMissingMeetingSteps from '@hooks/useCreateMissingMeetingSteps'
import useOrgMember from '@hooks/useOrgMember'
import MeetingThreadsDragDropContext from '@molecules/MeetingThreadsDragDropContext'
import MeetingAlertForceEdit from '@molecules/meeting/MeetingAlertForceEdit'
import MeetingAlertNotStarted from '@molecules/meeting/MeetingAlertNotStarted'
import MeetingAttendeesList from '@molecules/meeting/MeetingAttendeesList'
import MeetingLogs from '@molecules/meeting/MeetingLogs'
import MeetingStepContent from '@molecules/meeting/MeetingStepContent'
import { taskLogTypes } from '@molecules/meeting/MeetingStepContentTasks'
import MeetingStepLayout from '@molecules/meeting/MeetingStepLayout'
import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import MeetingEditModal from '../../organisms/meeting/MeetingEditModal'
import MeetingStartNotificationModal from '../../organisms/meeting/MeetingStartNotificationModal'
import MeetingContentEmpty from './MeetingContentEmpty'

export default function MeetingContent() {
  const { t } = useTranslation()
  const isMember = useOrgMember()

  const {
    meeting,
    steps,
    circle,
    isParticipant,
    editable,
    canEdit,
    forceEdit,
    isEnded,
    isNotStarted,
    isStarted,
    handleGoToStep,
  } = useContext(MeetingContext)!

  // Create missing steps
  const createMissingMeetingSteps = useCreateMissingMeetingSteps()
  useEffect(() => {
    if (!meeting || !circle || !steps) return
    // We want to create missing steps only if there is already some steps defined,
    // because MeetingContentEmpty is in charge of creating steps of a new meeting
    if (steps.length > 0) {
      createMissingMeetingSteps()
    }
  }, [meeting, circle, steps])

  // Meeting edition modal
  const editModal = useDisclosure()

  // Start notification modal
  const startNotifModal = useDisclosure()

  if (!meeting) {
    console.error('Meeting not found')
    return null
  }

  return (
    <Container maxW="3xl" py={10}>
      {isMember && !isEnded && !isParticipant && (
        <Alert status="info" mb={16}>
          <AlertIcon />
          <AlertDescription>{t('MeetingContent.notInvited')}</AlertDescription>
        </Alert>
      )}

      {meeting.archived && (
        <Alert status="info" mb={16}>
          <AlertIcon />
          <AlertDescription>{t('MeetingContent.archived')}</AlertDescription>
        </Alert>
      )}

      {canEdit &&
        !meeting.archived &&
        (steps?.length === 0 && meeting.stepsConfig.length !== 0 ? (
          <MeetingContentEmpty />
        ) : isNotStarted ? (
          <MeetingAlertNotStarted
            mb={16}
            onStart={startNotifModal.onOpen}
            onEdit={editModal.onOpen}
          />
        ) : (
          isEnded && forceEdit && <MeetingAlertForceEdit mb={16} />
        ))}

      <Collapse in={!!meeting.attendees} animateOpacity>
        {meeting.attendees && circle && <MeetingAttendeesList mb={16} />}
      </Collapse>

      <MeetingThreadsDragDropContext disabled={!editable}>
        {meeting.stepsConfig.map((stepConfig, index) => {
          const step = steps?.find((s) => s.stepConfigId === stepConfig.id)
          if (!step) return null
          const current = meeting.currentStepId === step.id

          return (
            <MeetingStepLayout
              key={step.id}
              index={index}
              stepId={step.id}
              title={stepConfig.title}
              current={current}
              onStepClick={
                isStarted && canEdit ? () => handleGoToStep(step.id) : undefined
              }
            >
              <MeetingStepContent step={step} />
            </MeetingStepLayout>
          )
        })}
      </MeetingThreadsDragDropContext>

      {!isNotStarted && (
        <MeetingLogs
          meetingId={meeting.id}
          title={t('MeetingContent.logs')}
          excludeTypes={taskLogTypes}
          hideEmpty
          mt={10}
        />
      )}

      <Box h="100px" />

      {editModal.isOpen && (
        <MeetingEditModal
          meeting={meeting}
          isOpen
          onClose={editModal.onClose}
        />
      )}

      {startNotifModal.isOpen && (
        <MeetingStartNotificationModal
          isOpen
          onClose={startNotifModal.onClose}
        />
      )}
    </Container>
  )
}
