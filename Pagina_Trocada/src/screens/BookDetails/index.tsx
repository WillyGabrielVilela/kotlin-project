import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import { getData } from '../../storage/storage';
import {
  Container,
  BookImage,
  BookTitle,
  BookDescription,
  NoImageContainer,
  NoImageText,
  LoadingContainer,
  RentButton,
  RentedButton,
  ButtonText
} from './styles';
import { Header } from '../../components/Header';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    thumbnail?: string;
  };
  phoneNumber: string;
}

type RootStackParamList = {
  BookDetails: { bookId: string };
};

type BookDetailsRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;

export function BookDetails() {
  const route = useRoute<BookDetailsRouteProp>();
  const { bookId } = route.params;
  const [book, setBook] = useState<Book | null>(null);
  const [isRented, setIsRented] = useState(false);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const storedBooks = await getData('books');
      const selectedBook = storedBooks.find((b: Book) => b.id === bookId);
      setBook(selectedBook);
    } catch (error) {
      console.error('Error fetching book details from storage:', error);
    }
  };

  const handleRentBook = () => {
    if (book && book.phoneNumber) {
      Clipboard.setString(book.phoneNumber);
      Alert.alert('Número Copiado', `Telefone ${book.phoneNumber} foi copiado para sua área de transferência.`);
      setIsRented(true);
    }
  };

  if (!book) {
    return (
      <LoadingContainer>
        <NoImageText>Loading...</NoImageText>
      </LoadingContainer>
    );
  }

  return (
    <>
      <Header />
      <Container>
        {book.volumeInfo?.thumbnail ? (
          <BookImage source={{ uri: book.volumeInfo.thumbnail }} />
        ) : (
          <NoImageContainer>
            <NoImageText>No Image Available</NoImageText>
          </NoImageContainer>
        )}
        <BookTitle>{book.volumeInfo.title}</BookTitle>
        <TouchableOpacity
          style={isRented ? RentedButton : RentButton}
          onPress={handleRentBook}
          disabled={isRented}
        >
          <ButtonText>{isRented ? 'Alugado' : 'Alugar e Copiar Número'}</ButtonText>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
          <BookDescription>{book.volumeInfo.description}</BookDescription>
        </ScrollView>
      </Container>
    </>
  );
}