import { Box } from '@chakra-ui/react'
import BaseRolesPanel from '@components/organisms/panels/BaseRolesPanel'
import CirclePanel from '@components/organisms/panels/CirclePanel'
import CirclesDefaultPanel from '@components/organisms/panels/CirclesDefaultPanel'
import MemberPanel from '@components/organisms/panels/MemberPanel'
import { useNavigateOrg } from '@hooks/useNavigateOrg'
import useOverflowHidden from '@hooks/useOverflowHidden'
import useQueryParams from '@hooks/useQueryParams'
import useWindowSize from '@hooks/useWindowSize'
import { useStoreState } from '@store/hooks'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CirclesGraph from '../organisms/CirclesGraph'

type CirclesPageParams = {
  circleId: string
  memberId: string
  baseRoles: string
  vacantRoles: string
}

enum Panels {
  Circle,
  Member,
  BaseRoles,
}

export default function CirclesPage() {
  useOverflowHidden()

  const queryParams = useQueryParams<CirclesPageParams>()
  const navigateOrg = useNavigateOrg()
  const orgId = useStoreState((state) => state.orgs.currentId)
  const [ready, setReady] = useState(false)

  // Content size
  const boxRef = useRef<HTMLDivElement>(null)
  const { width, height } = useWindowSize(boxRef)

  // Panels
  const [panel, setPanel] = useState<Panels | undefined>()
  const [circleId, setCircleId] = useState<string | undefined>()
  const [memberId, setMemberId] = useState<string | null | undefined>()

  const handleClosePanel = useCallback(() => navigateOrg(), [])

  // URL params
  useEffect(() => {
    if (!ready) return

    // Focus circle
    setCircleId(queryParams.circleId)

    // Open panel
    if (queryParams.baseRoles !== undefined) {
      setPanel(Panels.BaseRoles)
    } else if (queryParams.memberId) {
      setMemberId(queryParams.memberId)
      setPanel(Panels.Member)
    } else if (queryParams.circleId) {
      setPanel(Panels.Circle)
    } else {
      setPanel(undefined)
    }
  }, [ready, JSON.stringify(queryParams)])

  return (
    <Box flex={1} ref={boxRef} position="relative" overflow="hidden">
      {orgId && (
        <CirclesGraph
          width={width}
          height={height}
          selectedCircleId={circleId}
          onReady={() => setReady(true)}
        />
      )}

      {panel === undefined && <CirclesDefaultPanel />}

      {panel === Panels.Circle && circleId && (
        <CirclePanel id={circleId} onClose={handleClosePanel} />
      )}

      {panel === Panels.Member && memberId && (
        <MemberPanel
          id={memberId}
          highlightCircleId={circleId || undefined}
          onClose={handleClosePanel}
        />
      )}

      {panel === Panels.BaseRoles && (
        <BaseRolesPanel onClose={handleClosePanel} />
      )}
    </Box>
  )
}
