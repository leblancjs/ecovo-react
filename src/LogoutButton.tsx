import { useAuth } from './auth'

function LogoutButton() {
  const { logout } = useAuth()

  return <button onClick={() => logout()}>Log Out</button>
}

export default LogoutButton
