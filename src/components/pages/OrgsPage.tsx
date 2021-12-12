import { AddIcon } from '@chakra-ui/icons'
import {
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  Spacer,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Loading from '@components/atoms/Loading'
import TextErrors from '@components/atoms/TextErrors'
import OrgCreateModal from '@components/organisms/modals/OrgCreateModal'
import OrgEditModal from '@components/organisms/modals/OrgEditModal'
import { useStoreState } from '@store/hooks'
import React, { useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { Link as ReachLink } from 'react-router-dom'

export default function OrgsPage() {
  const orgs = useStoreState((state) => state.orgs.entries)
  const loading = useStoreState((state) => state.orgs.loading)
  const error = useStoreState((state) => state.orgs.error)

  // Create modal
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure()

  // Edit modal
  const [editOrgId, setEditOrgId] = useState<string | undefined>()
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure()

  const handleOpenEdit = (id: string) => {
    setEditOrgId(id)
    onEditOpen()
  }

  return (
    <Container maxW="3xl" marginTop="60px">
      <HStack margin="30px 0">
        <Heading as="h2" size="md">
          Organisations
        </Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />} onClick={onCreateOpen}>
          Créer
        </Button>
      </HStack>

      <Loading center active={loading} />
      <TextErrors errors={[error]} />

      <Wrap spacing={5}>
        {orgs?.map((org) => (
          <WrapItem key={org.id}>
            <LinkBox
              w="xs"
              p="5"
              borderWidth="1px"
              rounded="md"
              _hover={{ background: '#fafafa' }}
            >
              <Heading size="md" my="2">
                <HStack>
                  <LinkOverlay as={ReachLink} to={`/orgs/${org.id}`}>
                    {org.name}
                  </LinkOverlay>
                  <Spacer />
                  <IconButton
                    aria-label=""
                    size="sm"
                    onClick={() => handleOpenEdit(org.id)}
                    icon={<FiEdit3 />}
                  />
                </HStack>
              </Heading>
            </LinkBox>
          </WrapItem>
        ))}
      </Wrap>

      {isCreateOpen && <OrgCreateModal isOpen onClose={onCreateClose} />}

      {isEditOpen && editOrgId && (
        <OrgEditModal id={editOrgId} isOpen onClose={onEditClose} />
      )}
    </Container>
  )
}
