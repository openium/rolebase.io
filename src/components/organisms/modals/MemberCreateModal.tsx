import { createMember, memberCreateSchema } from '@api/entities/members'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  UseModalProps,
} from '@chakra-ui/react'
import MembersToCopyList from '@components/molecules/MembersToCopyList'
import { yupResolver } from '@hookform/resolvers/yup'
import { Member, MemberEntry } from '@shared/member'
import { useStoreState } from '@store/hooks'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'

interface Props extends UseModalProps {
  onCreate?: (id: string) => void
}

export default function MemberCreateModal(props: Props) {
  const orgId = useStoreState((state) => state.orgs.currentId)

  const { handleSubmit, errors, register } = useForm<Member>({
    resolver: yupResolver(memberCreateSchema),
  })

  const onSubmit = handleSubmit(async ({ name }) => {
    if (!orgId) return
    const member = await createMember({ orgId, name })
    props.onCreate?.(member.id)
    props.onClose()
  })

  const handleCopy = useCallback(
    async (memberToCopy: MemberEntry) => {
      if (!orgId) return
      const member = await createMember({ ...memberToCopy, orgId })
      props.onCreate?.(member.id)
      props.onClose()
    },
    [orgId]
  )

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader>Ajouter un membre</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Nom</FormLabel>
              <Input
                name="name"
                placeholder="Nom..."
                ref={register()}
                autoFocus
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <Box textAlign="right" mt={2}>
              <Button colorScheme="blue" type="submit">
                Créer
              </Button>
            </Box>

            <MembersToCopyList onClick={handleCopy} />
          </ModalBody>
        </form>
      </ModalContent>
    </Modal>
  )
}
