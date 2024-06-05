import { Container, Title, Slogan, GradientBackground, ImageLogo } from './styles'

import Logo from "../../../assets/icon.png"

export function SignIn() {
  return (
    <GradientBackground>
    <Container>
    <ImageLogo source={Logo} />
      <Title>Página Trocada</Title>

      <Slogan>
      Faça login e troque experiências literárias com outras pessoas!
      </Slogan>
    </Container>
    </GradientBackground>
  )
}

