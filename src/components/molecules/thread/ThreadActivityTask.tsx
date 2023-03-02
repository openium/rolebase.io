import { Text } from '@chakra-ui/react'
import { useUserId } from '@nhost/react'
import { ThreadActivityTaskFragment } from '@shared/model/thread_activity'
import React from 'react'
import { useTranslation } from 'react-i18next'
import TaskItem from '../task/TaskItem'
import ThreadActivityLayout from './ThreadActivityLayout'

interface Props {
  activity: ThreadActivityTaskFragment
}

export default function ThreadActivityTask({ activity }: Props) {
  const { t } = useTranslation()
  const userId = useUserId()

  // Edition
  const isUserOwner = userId === activity.userId

  return (
    <ThreadActivityLayout activity={activity} allowDelete={isUserOwner}>
      <Text color="gray.500" _dark={{ color: 'gray.300' }}>
        {t(`ThreadActivityTask.text`)}
      </Text>
      {activity.refTask && (
        <TaskItem
          task={activity.refTask}
          showMember
          showIcon
          width="fit-content"
        />
      )}
    </ThreadActivityLayout>
  )
}
