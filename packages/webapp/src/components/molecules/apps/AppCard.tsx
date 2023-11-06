import { calendarAppFactory } from '@api/apps'
import Loading from '@atoms/Loading'
import Switch from '@atoms/Switch'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import { App_Type_Enum, UserAppFragment } from '@gql'
import { useAsyncMemo } from '@hooks/useAsyncMemo'
import useConfirmModal from '@hooks/useConfirmModal'
import { AppCalendarConfig, OrgCalendarConfig } from '@shared/model/user_app'
import debounce from 'lodash.debounce'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AppCalendarOrgSelect from './AppCalendarOrgSelect'
import appsParams from './appsParams'

interface Props {
  type: App_Type_Enum
  userApp?: UserAppFragment
}

export default function AppCard({ type, userApp }: Props) {
  const { t } = useTranslation()
  const appParams = appsParams[type]
  const config: AppCalendarConfig | undefined = userApp?.config

  const { confirm, confirmElement } = useConfirmModal()

  // Instanciate calendar app
  const calendarApp = useMemo(
    () => userApp && calendarAppFactory(userApp.id),
    [userApp?.id]
  )

  // Fetch calendars
  const calendars = useAsyncMemo(
    () => calendarApp?.listCalendars(),
    [calendarApp],
    undefined
  )

  // Install app
  const handleInstall = () => {
    // Open auth page in a new tab
    window.open(appParams.authUrl, '_blank')
  }

  // Uninstall app
  const handleUninstall = async () => {
    await calendarApp?.uninstall()
  }

  // Calendars
  const [availabilityCalendars, setAvailabilityCalendars] = useState<string[]>(
    []
  )
  const [orgsCalendars, setOrgsCalendars] = useState<OrgCalendarConfig[]>([])
  useEffect(() => {
    if (!config) return
    setAvailabilityCalendars(config.availabilityCalendars)
    setOrgsCalendars(config.orgsCalendars)
  }, [config])

  const handleSaveConfig = useMemo(
    () =>
      debounce(
        async (
          availabilityCalendars: string[],
          orgsCalendars: OrgCalendarConfig[]
        ) => {
          await calendarApp?.selectCalendars(
            // Filter calendars that are not available anymore
            availabilityCalendars.filter(
              (id) => calendars?.find((calendar) => calendar.id === id)
            ),
            orgsCalendars.filter(
              ({ calendarId }) =>
                calendars?.find((calendar) => calendar.id === calendarId)
            )
          )
        },
        2000
      ),
    [calendarApp, calendars]
  )

  const handleToggleAvailabilityCalendar = (calendarId: string) => {
    const newAvailabilityCalendars = availabilityCalendars.includes(calendarId)
      ? availabilityCalendars.filter((c) => c !== calendarId)
      : [...availabilityCalendars, calendarId]
    setAvailabilityCalendars(newAvailabilityCalendars)
    handleSaveConfig(newAvailabilityCalendars, orgsCalendars)
  }

  const handleSetOrgCalendar = (
    calendarId: string,
    orgId: string | null = null
  ) => {
    const modalProps = orgId
      ? {
          heading: t('AppCalendarOrgSelect.confirmSyncHeading'),
          info: t('AppCalendarOrgSelect.confirmSyncInfo'),
          buttonLabel: t('AppCalendarOrgSelect.confirmSyncButton'),
          buttonColor: 'green',
        }
      : {
          heading: t('AppCalendarOrgSelect.confirmStopHeading'),
          info: t('AppCalendarOrgSelect.confirmStopInfo'),
          buttonLabel: t('AppCalendarOrgSelect.confirmStopButton'),
          buttonColor: 'red',
        }
    confirm({
      ...modalProps,
      onConfirm: () => handleSetOrgCalendarConfirmed(calendarId, orgId),
    })
  }

  const handleSetOrgCalendarConfirmed = (
    calendarId: string,
    orgId: string | null = null
  ) => {
    const newOrgsCalendars = orgsCalendars.filter(
      (c) =>
        c.calendarId !== calendarId && (orgId === null || c.orgId !== orgId)
    )
    if (orgId) {
      newOrgsCalendars.push({ calendarId, orgId })
    }
    setOrgsCalendars(newOrgsCalendars)
    handleSaveConfig(availabilityCalendars, newOrgsCalendars)
  }

  return (
    <Card>
      <CardHeader>
        <Flex alignItems="center" flexWrap="wrap">
          <Icon as={appParams.icon} boxSize={8} mr={3} />
          <Heading as="h2" size="md">
            {t(`AppCard.apps.${type}.title`)}
          </Heading>
          <Spacer />
          <Text mr={3}>{config?.email}</Text>
          <Button
            size="sm"
            variant={userApp ? 'outline' : 'solid'}
            colorScheme={userApp ? 'red' : 'blue'}
            onClick={userApp ? handleUninstall : handleInstall}
          >
            {t(`AppCard.${userApp ? 'uninstall' : 'install'}`)}
          </Button>
        </Flex>
      </CardHeader>
      <CardBody pt={0}>
        {userApp ? (
          <>
            <Text>{t(`AppCard.apps.${type}.descriptionInstalled`)}</Text>

            <VStack spacing={0} align="stretch" mt={5}>
              {!calendars && <Loading active size="sm" />}

              {calendars?.map((calendar) => {
                const availabilitySelected = availabilityCalendars.includes(
                  calendar.id
                )
                const orgCalendar = orgsCalendars.find(
                  (c) => c.calendarId === calendar.id
                )

                return (
                  <Flex key={calendar.id} h={9} alignItems="center">
                    <Switch
                      isChecked={availabilitySelected}
                      onChange={() =>
                        handleToggleAvailabilityCalendar(calendar.id)
                      }
                      isDisabled={!!orgCalendar}
                    >
                      {calendar.name}
                    </Switch>

                    <Spacer />

                    {availabilitySelected &&
                      (calendar.canEdit ? (
                        <AppCalendarOrgSelect
                          calendarId={calendar.id}
                          orgCalendars={orgsCalendars}
                          value={orgCalendar ? orgCalendar.orgId : null}
                          onChange={handleSetOrgCalendar}
                        />
                      ) : (
                        <Text fontSize="sm" color="gray.500">
                          {t('AppCard.readonly')}
                        </Text>
                      ))}
                  </Flex>
                )
              })}
            </VStack>
          </>
        ) : (
          <Text>{t(`AppCard.apps.${type}.description`)}</Text>
        )}
      </CardBody>

      {confirmElement}
    </Card>
  )
}
