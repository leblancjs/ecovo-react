import { useAuth } from './auth'

function LoginButton() {
  const { login } = useAuth()

  return <button onClick={() => login()}>Log In</button>
}

export default LoginButton
