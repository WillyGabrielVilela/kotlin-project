import { useState } from 'react';
import { Image } from 'react-native';
import { Container, ImageLogo, Slogan, Title } from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import {Realm, useApp } from '@realm/react'

import backgroundImg from '../../assets/background.png'
import logoImg from '../../../assets/icon.png'
import googleImg from '../../assets/googlebutton.png'
import { Container as GoogleButton } from '../../components/Button/styles';

import { WEB_CLIENT_ID } from '@env'
import { Alert } from 'react-native';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
})

export function SignIn() {

  const [isAutenticating, setIsAuthenticanting] = useState(false)
  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticanting(true)

      const { idToken } = await GoogleSignin.signIn()
      if (idToken) {
          const credentials = Realm.Credentials.jwt(idToken)

          await app.logIn(credentials)
      } else {
        Alert.alert('Entrar', "Não foi possível conectar-se a sua conta google.")
        setIsAuthenticanting(false)
      }

    } catch (error) {
      console.log(error)
      Alert.alert('Entrar', "Não foi possível conectar-se a sua conta google.")
      setIsAuthenticanting(false)
    }
  }

  return (
    <Container source={backgroundImg}>
      <ImageLogo source={logoImg} />
      <Title>Pagina Trocada</Title>
      <Slogan>
        Faça login e troque experiências literárias com outras pessoas!
      </Slogan>
      <GoogleButton style={{ backgroundColor: "transparent" }} onPress={handleGoogleSignIn}>
        <Image source={googleImg} />
      </GoogleButton>
    </Container>
  );
}


