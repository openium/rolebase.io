import { Box, Button, Stack, StackItem, Text } from '@chakra-ui/react'
import NumberInput from '@components/atoms/NumberInput'
import usePollState from '@hooks/usePollState'
import { ActivityPoll, PollAnswer } from '@shared/activity'
import { WithId } from '@shared/types'
import { format } from 'date-fns'
import React, { memo, useEffect, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { FiCheck } from 'react-icons/fi'
import { dateFnsLocale } from 'src/locale'

interface Props {
  activity: WithId<ActivityPoll>
  answers: WithId<PollAnswer>[]
  onVote(choicesPoints: number[]): void
}

interface Values {
  choices: Array<{
    points: number
  }>
}

function ThreadActivityPollVote({ activity, answers, onVote }: Props) {
  const { ended, userAnswer } = usePollState(activity, answers)

  // Vote form
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<Values>({
    defaultValues: {
      choices: userAnswer
        ? userAnswer.choicesPoints.map((points) => ({ points }))
        : activity.choices.map(() => ({ points: 0 })),
    },
  })

  // Reset form when user answer changes
  useEffect(() => {
    if (userAnswer) {
      reset({
        choices: userAnswer.choicesPoints.map((points) => ({ points })),
      })
    }
  }, [userAnswer])

  // Array of choices fields
  const { fields: choicesFields, update: updateChoice } = useFieldArray({
    control,
    name: 'choices',
  })

  const nbSelectedChoices = useMemo(
    () =>
      choicesFields.reduce((sum, choice) => sum + (choice.points ? 1 : 0), 0),
    [choicesFields]
  )
  const usedPoints = useMemo(
    () => choicesFields.reduce((sum, choice) => sum + choice.points, 0),
    [choicesFields]
  )
  const remainingPoints = activity.pointsPerUser
    ? activity.pointsPerUser - usedPoints
    : 0 // Stay at 0 if no points per user
  const notEnoughChoices =
    !!activity.minAnswers && nbSelectedChoices < activity.minAnswers
  const tooMuchChoices =
    !!activity.maxAnswers && nbSelectedChoices > activity.maxAnswers

  const voteButtonDisabled =
    remainingPoints !== 0 || notEnoughChoices || tooMuchChoices

  // Click on a choice button
  const handleToggleVote = (choiceId: number) => {
    if (activity.multiple) {
      // Multiple choice
      if (choicesFields[choiceId].points) {
        // Remove vote
        updateChoice(choiceId, { points: 0 })
      } else {
        // Add vote
        updateChoice(choiceId, { points: 1 })
      }
    } else {
      // Single choice
      if (!choicesFields[choiceId].points) {
        // Change vote
        updateChoice(choiceId, { points: 1 })
        const existingVoteId = choicesFields.findIndex(
          (choice) => choice.points
        )
        if (existingVoteId !== -1) {
          updateChoice(existingVoteId, { points: 0 })
        }
      }
      handleVote()
    }
  }

  const handleVote = handleSubmit(({ choices }) => {
    onVote(choices.map((choice) => choice.points))
  })

  return (
    <>
      {activity.multiple &&
        (activity.minAnswers && activity.minAnswers === activity.maxAnswers ? (
          <Text>Sélectionnez {activity.minAnswers} choix.</Text>
        ) : activity.minAnswers && activity.maxAnswers ? (
          <Text>
            Sélectionnez entre {activity.minAnswers} et {activity.maxAnswers}{' '}
            choix.
          </Text>
        ) : activity.minAnswers ? (
          <Text>Sélectionnez au moins {activity.minAnswers} choix.</Text>
        ) : activity.maxAnswers ? (
          <Text>Maximum {activity.maxAnswers} choix.</Text>
        ) : (
          <Text>Plusieurs choix possibles.</Text>
        ))}

      {activity.anonymous && <Text>Les réponses sont anonymes.</Text>}

      <Stack spacing={1} mt={3} align="stretch">
        {activity.choices.map((choice, index) => {
          const { points } = choicesFields[index]
          const checked = !!points
          return (
            <StackItem key={index} display="flex">
              <Button
                flex="1"
                justifyContent="space-between"
                variant="outline"
                colorScheme={checked ? 'blue' : 'gray'}
                whiteSpace="break-spaces"
                h="auto"
                py="0.5em"
                rightIcon={checked ? <FiCheck /> : undefined}
                onClick={() => handleToggleVote(index)}
              >
                {choice.title}
              </Button>
              {/* Fixed size box is used to keep buttons the same size */}
              <Box w="70px" pl={2} display="flex" alignItems="center">
                {checked && activity.pointsPerUser ? (
                  <NumberInput
                    value={points}
                    onChange={(value) => updateChoice(index, { points: value })}
                    size="xs"
                    maxW={16}
                    min={1}
                  />
                ) : null}
              </Box>
            </StackItem>
          )
        })}
      </Stack>

      {activity.multiple && nbSelectedChoices > 0 && (!userAnswer || isDirty) && (
        <>
          {activity.pointsPerUser &&
            (remainingPoints === 0 ? (
              <Text>Vous avez distribué tous vos points.</Text>
            ) : remainingPoints > 0 ? (
              <Text>
                Il vous reste {remainingPoints}{' '}
                {remainingPoints > 1 ? 'points' : 'point'} à distribuer.
              </Text>
            ) : (
              <Text>
                Vous avez distribué {-remainingPoints}{' '}
                {-remainingPoints > 1 ? 'points' : 'point'} de trop.
              </Text>
            ))}

          <Box w="70px" pl={2} display="flex" alignItems="center">
            <Button
              mt={2}
              colorScheme="blue"
              isDisabled={voteButtonDisabled}
              onClick={handleVote}
            >
              Voter
            </Button>
          </Box>
        </>
      )}

      {!ended && activity.hideUntilEnd && (
        <Text mt={2}>
          Les résultats seront dévoilés{' '}
          {activity.endDate &&
            format(activity.endDate.toDate(), 'PPPP ', {
              locale: dateFnsLocale,
            })}
          {activity.endWhenAllVoted && (
            <>
              {activity.endDate && ' ou '}
              quand tous les participants auront voté.
            </>
          )}
        </Text>
      )}
    </>
  )
}

export default memo(ThreadActivityPollVote)
