import { createOrg } from '@api/functions'
import BrandIcon from '@atoms/BrandIcon'
import TextError from '@atoms/TextError'
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  useMediaQuery,
  UseModalProps,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import useOrg from '@hooks/useOrg'
import { getOrgPath } from '@shared/helpers/getOrgPath'
import { nameSchema, slugSchema } from '@shared/schemas'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'
import settings from 'src/settings'
import * as yup from 'yup'

interface Values {
  name: string
  slug: string
}

const resolver = yupResolver(
  yup.object().shape({
    name: nameSchema.required(),
    slug: slugSchema.required(),
  })
)

export default function OrgCreateModal(modalProps: UseModalProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()
  const [orgId, setOrgId] = useState<string | undefined>()
  const org = useOrg(orgId)
  const [isSmallScreen] = useMediaQuery('(max-width: 900px)')

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Values>({
    resolver,
  })

  // Update slug value when name changes
  const name = watch('name')
  useEffect(() => {
    if (name) {
      setValue('slug', slugify(name, { strict: true }).toLowerCase())
    }
  }, [name])

  const onSubmit = handleSubmit(async ({ name, slug }) => {
    setLoading(true)
    setError(undefined)
    try {
      // Create org
      const orgId = await createOrg({ name, slug })
      setOrgId(orgId)
    } catch (e: any) {
      setLoading(false)
      const message =
        e.message === 'Conflict'
          ? t('OrgSlugModal.already-exists')
          : e.message || e.toString()
      setError(new Error(message))
    }
  })

  // Redirect after creation to new organization
  useEffect(() => {
    if (org) {
      modalProps.onClose()
      navigate(getOrgPath(org))
    }
  }, [org])

  return (
    <Modal closeOnOverlayClick={false} size="6xl" {...modalProps}>
      <ModalOverlay bg="gray.100" _dark={{ bg: 'gray.800' }} />

      <ModalContent my="115px">
        <ModalCloseButton />

        <Center w="100%" textAlign="center" position="absolute" top="-70px">
          <BrandIcon size="md" />
        </Center>

        <ModalBody mx={5} my={7}>
          <SimpleGrid columns={isSmallScreen ? 1 : 2} spacing="50px">
            <Box>
              <Heading as="h1" size="md" mb={7}>
                {t('OrgCreateModal.join.heading')}
              </Heading>
              {t('OrgCreateModal.join.text')}
            </Box>

            <form onSubmit={onSubmit}>
              <Heading as="h1" size="md" mb={7}>
                {t('OrgCreateModal.create.heading')}
              </Heading>

              <VStack spacing={7}>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel>{t('common.name')}</FormLabel>
                  <Input {...register('name')} autoFocus />
                </FormControl>

                <FormControl isInvalid={!!errors.slug}>
                  <FormLabel>{t('OrgCreateModal.create.slug')}</FormLabel>
                  <InputGroup>
                    <InputLeftAddon _dark={{ borderColor: 'whiteAlpha.400' }}>
                      {settings.url}/
                    </InputLeftAddon>
                    <Input {...register('slug')} maxLength={30} />
                  </InputGroup>

                  {errors.slug && (
                    <FormErrorMessage>{errors.slug.message}</FormErrorMessage>
                  )}
                </FormControl>

                {error && <TextError error={error} />}

                <Button
                  rightIcon={<FiArrowRight />}
                  colorScheme="blue"
                  type="submit"
                  isLoading={loading}
                  ml={3}
                >
                  {t('common.create')}
                </Button>
              </VStack>
            </form>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
