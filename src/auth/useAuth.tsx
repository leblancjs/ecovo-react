import { useAuth0 } from '@auth0/auth0-react'

function useAuth() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0()

  return {
    login: loginWithRedirect,
    logout: () => logout({ returnTo: window.location.origin }),
    isAuthenticated,
    isLoading,
    user,
  }
}

export { useAuth }
