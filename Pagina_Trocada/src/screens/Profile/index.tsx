import React, { useState } from 'react';
import { useApp, useUser } from '@realm/react';
import { Button, FlatList } from 'react-native';
import { Container, Name, Picture, SectionTitle, BookItem, BookImage, BookTitle, ButtonText } from './styles';
import { clearStorage } from '../../storage/storage';
import { Book } from '../../libs/schemas/BookUserModels';

export function Profile() {
  const user = useUser();
  const app = useApp()

  const [books, setBooks] = useState<Book[]>([]);


  const handleClearStorage = async () => {
    await clearStorage();
    setBooks([]);
  };

  function handleLogout() {
    app.currentUser?.logOut()
  }

  return (
    <Container>
      <Picture source={{ uri: user?.profile.pictureUrl }} />
      <Name>{user?.profile.name}</Name>

        <ButtonText title="Limpar Storage" onPress={handleClearStorage}>Limpar Storage</ButtonText>
        <ButtonText title="" onPress={handleLogout}>Deslogar</ButtonText>

    </Container>
  );
}
