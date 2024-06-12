import React from 'react';
import { Container, Greeting, Message, Name, Picture } from './styles';
import { TouchableOpacity, Image } from 'react-native';
import { useUser, useApp } from '@realm/react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import logoutImg from '../../assets/logout.png'
import { useNavigation } from '@react-navigation/native';

export function Header() {
  const user = useUser()
  const app = useApp()

  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 32;
  
  function handleLogout() {
    app.currentUser?.logOut()
  }


  // Navegação para Perfil

  const { navigate } = useNavigation();

  function handleRegisterMoviment() {
    navigate('profile')
  }

  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity onPress={handleRegisterMoviment}>
      <Picture 
        source={{uri: user?.profile.pictureUrl }}
        
      />
      </TouchableOpacity>
      <Greeting>
        <Message>
          Boas-vindas ao Página Trocada
        </Message>

        <Name>
          {user?.profile.name}
        </Name>
      </Greeting>
      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Image source={logoutImg} />
      </TouchableOpacity>

    </Container>
  );
}