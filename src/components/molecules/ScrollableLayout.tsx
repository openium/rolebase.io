import { Box, BoxProps, Flex } from '@chakra-ui/react'
import useScrollable, { ScrollPosition } from '@hooks/useScrollable'
import React, { ReactNode, useRef } from 'react'

interface Props extends BoxProps {
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
}

const scrollbarWidth = '12px'

export default function ScrollableLayout({
  header,
  children,
  footer,
  ...boxProps
}: Props) {
  // Scrollable content
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const {
    containerRef,
    contentRef,
    isScrollable,
    scrollPosition,
    handleScroll,
  } = useScrollable()

  const showTopbar = isScrollable && scrollPosition !== ScrollPosition.Top
  const showBottombar = isScrollable && scrollPosition !== ScrollPosition.Bottom

  return (
    <Box
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      h="100%"
      bg="menulight"
      _dark={{ bg: 'menudark' }}
      {...boxProps}
    >
      <Box
        ref={topRef}
        position="relative"
        zIndex={10}
        minH={scrollbarWidth}
        px={scrollbarWidth}
        display="flex"
        w="100%"
        py={2}
        borderTopRadius="lg"
        borderBottomWidth={2}
        borderBottomColor={showTopbar ? 'gray.200' : 'transparent'}
        bg="menulight"
        _dark={{
          bg: 'menudark',
          borderBottomColor: showTopbar ? 'gray.600' : 'transparent',
        }}
      >
        {header}
      </Box>

      <Flex
        flex={1}
        ref={containerRef}
        flexDirection="column"
        overflowY="auto"
        onScroll={handleScroll}
      >
        <Box
          ref={contentRef}
          flex={1}
          position="relative"
          borderTopRadius={showTopbar ? 0 : '32px'}
          borderBottomRadius={showBottombar ? 0 : '32px'}
          transition="border-radius 0.1s ease-out"
          bg="white"
          _dark={{ bg: 'gray.900' }}
        >
          {children}
        </Box>
      </Flex>

      <Box
        ref={bottomRef}
        position="relative"
        zIndex={10}
        minH={scrollbarWidth}
        px={{ base: 0, md: scrollbarWidth }}
        borderBottomRadius="lg"
        borderTopWidth={2}
        borderTopColor={showBottombar ? 'gray.200' : 'transparent'}
        bg="menulight"
        _dark={{
          bg: 'menudark',
          borderTopColor: showBottombar ? 'gray.600' : 'transparent',
        }}
      >
        {footer}
      </Box>
    </Box>
  )
}
