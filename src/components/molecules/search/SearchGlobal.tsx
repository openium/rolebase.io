import { SearchIcon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  useColorMode,
} from '@chakra-ui/react'
import useCurrentOrg from '@hooks/useCurrentOrg'
import { useCombobox, UseComboboxStateChange } from 'downshift'
import React, { useCallback, useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CircleMemberContext } from 'src/contexts/CircleMemberContext'
import { useCircleMemberSearchItems } from './entities/circleMembers/useCircleMemberSearchItems'
import { useCircleSearchItems } from './entities/circles/useCircleSearchItems'
import { useMemberSearchItems } from './entities/members/useMemberSearchItems'
import SearchResultItem from './SearchResultItem'
import { SearchItem, SearchItemTypes } from './searchTypes'
import { useCombineArrays } from './useCombineArrays'
import { useSearch } from './useSearch'

const maxDisplayedItems = 50

interface Props {
  onClose(): void
}

export default function SearchGlobal({ onClose }: Props) {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const org = useCurrentOrg()
  const circleMemberContext = useContext(CircleMemberContext)

  // Get items
  const memberItems = useMemberSearchItems()
  const circleItems = useCircleSearchItems()
  const circleMemberItems = useCircleMemberSearchItems()
  const items = useCombineArrays(memberItems, circleItems, circleMemberItems)

  // Search
  const { filteredItems, onInputValueChange } = useSearch(items, true)

  const onSelectedItemChange = useCallback(
    (changes: UseComboboxStateChange<SearchItem>) => {
      const item = changes.selectedItem
      if (!item) return
      onClose()

      if (item.type === SearchItemTypes.Member) {
        circleMemberContext?.goTo(undefined, item.member.id)
      } else if (item.type === SearchItemTypes.Circle) {
        circleMemberContext?.goTo(item.circle.id)
      } else if (item.type === SearchItemTypes.CircleMember) {
        circleMemberContext?.goTo(item.circle.id, item.member.id)
      }
    },
    []
  )

  const {
    highlightedIndex,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items: filteredItems,
    itemToString: () => '',
    defaultHighlightedIndex: 0,
    onInputValueChange,
    onSelectedItemChange,
  })

  // Input
  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputProps = getInputProps({
    ref: inputRef,
    onBlur: (event) => {
      ;(event.nativeEvent as any).preventDownshiftDefault = true
    },
  })

  return (
    <div {...getComboboxProps()}>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder={t('SearchGlobal.placeholder', { org: org?.name })}
          borderRadius="md"
          background={colorMode === 'light' ? 'white' : 'gray.800'}
          {...inputProps}
        />
      </InputGroup>

      <List
        display={filteredItems.length === 0 ? 'none' : ''}
        position="absolute"
        overflow="hidden"
        left={0}
        right={0}
        mt="1px"
        pt={3}
        pb={2}
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        borderBottomRadius="md"
        {...getMenuProps()}
      >
        {filteredItems.slice(0, maxDisplayedItems).map((item, index) => (
          <ListItem key={index} mb={1}>
            <SearchResultItem
              item={item}
              highlighted={index === highlightedIndex}
              size="sm"
              w="100%"
              py={2}
              px={5}
              bg="transparent"
              borderRadius="none"
              _active={{
                bg: colorMode === 'light' ? 'gray.100' : 'whiteAlpha.100',
              }}
              {...getItemProps({ item, index })}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
