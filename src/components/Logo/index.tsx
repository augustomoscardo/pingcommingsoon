import logoImg from '../../assets/logo.svg'
import { Container } from './styles'

export function Logo() {
  return (
    <Container>
      <img src={logoImg} alt="Ping" />
    </Container>
  )
}