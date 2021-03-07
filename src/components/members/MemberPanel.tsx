import { EditIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Button,
  CloseButton,
  Heading,
  HStack,
  Spacer,
  StackItem,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import useMember from '../../hooks/useMember'
import Panel from '../common/Panel'
import MemberEditModal from './MemberEditModal'
import MemberRoles from './MemberRoles'

interface Props {
  id: string
  highlightCircleId?: string
  onClose(): void
  onCircleFocus?(circleId: string): void
}

export default function MemberPanel({
  id,
  highlightCircleId,
  onClose,
  onCircleFocus,
}: Props) {
  const member = useMember(id)

  // Edit modal
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure()

  if (!member) return null

  return (
    <Panel>
      <Heading size="sm" marginBottom={5}>
        <HStack spacing={5}>
          <Avatar
            name={member.name}
            src={member.picture || undefined}
            size="lg"
          />
          <StackItem>{member.name}</StackItem>
          <Button onClick={onEditOpen}>
            <EditIcon />
          </Button>
          <Spacer />
          <CloseButton onClick={onClose} />
        </HStack>
      </Heading>

      <Heading size="xs">Rôles</Heading>
      <MemberRoles
        id={id}
        highlightCircleId={highlightCircleId}
        onCircleFocus={onCircleFocus}
      />

      <MemberEditModal id={id} isOpen={isEditOpen} onClose={onEditClose} />
    </Panel>
  )
}
