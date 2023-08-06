import Loading from '@atoms/Loading'
import AuthPage from '@pages/AuthPage'
import React, { useEffect } from 'react'
import settings, { isLocal, isStaging } from 'src/settings'

const redirectToWebsite = !isLocal && !isStaging

export default function Homepage() {
  // Redirect to website (prod only)
  useEffect(() => {
    if (redirectToWebsite) {
      window.location.href = settings.websiteUrl
    }
  }, [])

  return redirectToWebsite ? <Loading active center /> : <AuthPage />
}
