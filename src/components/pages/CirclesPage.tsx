import { Box, useColorMode, useMediaQuery } from '@chakra-ui/react'
import ModalPanel, { modalPanelWidth } from '@components/atoms/ModalPanel'
import { Title } from '@components/atoms/Title'
import CirclesKeyboardShortcuts from '@components/molecules/CirclesKeyboardShortcuts'
import CircleContent from '@components/organisms/circle/CircleContent'
import CirclesGraph from '@components/organisms/circle/CirclesGraph'
import MemberContent from '@components/organisms/member/MemberContent'
import Onboarding from '@components/organisms/onboarding/Onboarding'
import useCurrentOrg from '@hooks/useCurrentOrg'
import { useElementSize } from '@hooks/useElementSize'
import useCirclesEvents from '@hooks/useGraphEvents'
import { useNavigateOrg } from '@hooks/useNavigateOrg'
import useOverflowHidden from '@hooks/useOverflowHidden'
import useQueryParams from '@hooks/useQueryParams'
import { enrichCirclesWithRoles } from '@shared/helpers/enrichCirclesWithRoles'
import { useStoreState } from '@store/hooks'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { GraphZoomProvider } from 'src/contexts/GraphZoomContext'
import { SidebarContext } from 'src/contexts/SidebarContext'

type CirclesPageParams = {
  circleId: string
  memberId: string
}

enum Panels {
  None,
  Circle,
  Member,
}

// Make colorMode available for functions outside of React component
export let lastColorMode: 'light' | 'dark' | undefined

export default function CirclesPage() {
  useOverflowHidden()

  const queryParams = useQueryParams<CirclesPageParams>()
  const navigateOrg = useNavigateOrg()
  const org = useCurrentOrg()
  const sidebarContext = useContext(SidebarContext)
  const [ready, setReady] = useState(false)

  // Data
  const circles = useStoreState((state) => state.circles.entries)
  const roles = useStoreState((state) => state.roles.entries)
  const circlesWithRoles = useMemo(
    () => circles && roles && enrichCirclesWithRoles(circles, roles),
    [circles, roles]
  )
  const members = useStoreState((state) => state.members.entries)
  const events = useCirclesEvents()

  // Content size
  const boxRef = useRef<HTMLDivElement>(null)
  const boxSize = useElementSize(boxRef)
  const [isSmallScreen] = useMediaQuery('(max-width: 450px)')

  // Panels
  const [panel, setPanel] = useState<Panels>(Panels.None)
  const [circleId, setCircleId] = useState<string | undefined>()
  const [memberId, setMemberId] = useState<string | null | undefined>()

  const handleClosePanel = useCallback(() => navigateOrg(), [])

  // Zoom offsets when focusing
  const focusCrop = useMemo(
    () =>
      sidebarContext
        ? {
            top: 0,
            left: sidebarContext.width,
            right:
              sidebarContext.height || panel === Panels.None
                ? 0
                : modalPanelWidth,
            bottom: 0,
          }
        : undefined,
    [sidebarContext?.width, sidebarContext?.height, panel]
  )

  // URL params
  useEffect(() => {
    if (!ready) return

    // Focus circle
    setCircleId(queryParams.circleId)

    // Open panel
    if (queryParams.memberId) {
      setMemberId(queryParams.memberId)
      setPanel(Panels.Member)
    } else if (queryParams.circleId) {
      setPanel(Panels.Circle)
    } else {
      setPanel(Panels.None)
    }
  }, [ready, JSON.stringify(queryParams)])

  // Color mode
  const { colorMode } = useColorMode()
  if (colorMode !== lastColorMode) {
    lastColorMode = colorMode
  }

  return (
    <GraphZoomProvider>
      <Box
        ref={boxRef}
        position="absolute"
        top={sidebarContext?.height || 0}
        bottom={0}
        left={0}
        right={0}
        overflow="hidden"
      >
        {org && circlesWithRoles && members && boxSize && (
          <CirclesGraph
            key={colorMode}
            id={`graph-${org.id}`}
            circles={circlesWithRoles}
            members={members}
            events={events}
            width={boxSize.width}
            height={boxSize.height}
            focusCrop={focusCrop}
            selectedCircleId={circleId}
            onReady={() => setReady(true)}
          />
        )}
      </Box>

      {panel === Panels.Circle && circleId && (
        <ModalPanel onClose={handleClosePanel}>
          <CircleContent
            id={circleId}
            changeTitle
            extendBottom={!isSmallScreen}
            isFirstTabOpen={!isSmallScreen}
          />
        </ModalPanel>
      )}

      {panel === Panels.Member && memberId && (
        <ModalPanel onClose={handleClosePanel}>
          <MemberContent
            id={memberId}
            selectedCircleId={circleId || undefined}
            changeTitle
          />
        </ModalPanel>
      )}

      {panel === Panels.None && org && <Title>{org.name}</Title>}

      <CirclesKeyboardShortcuts position="absolute" left={3} bottom={3} />

      <Onboarding />
    </GraphZoomProvider>
  )
}
