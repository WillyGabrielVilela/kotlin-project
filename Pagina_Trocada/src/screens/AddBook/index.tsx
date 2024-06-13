import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { saveData, getData, getNextId } from '../../storage/storage';
import { fetchBookDetails } from '../../api/googleBooksApi';
import {
  Container,
  Input,
  StyledButton,
  ButtonText
} from './styles';
import { Header } from '../../components/Header';

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
  phoneNumber: string;
}

export const AddBook = () => {
  const [title, setTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const storedBooks = await getData('books');
      if (storedBooks && Array.isArray(storedBooks)) {
        setBooks(storedBooks);
      }
    } catch (error) {
      console.error('Error fetching books from storage:', error);
    }
  };

  const searchBook = async () => {
    try {
      const bookDetails = await fetchBookDetails(title);
      const id = await getNextId();
      const newBook: Book = { id, volumeInfo: bookDetails, phoneNumber };
      const updatedBooks = [newBook, ...books];
      await saveData('books', updatedBooks);
      Alert.alert('Livro Cadastrado', 'O livro foi cadastrado com sucesso');
      setTitle('');
      setPhoneNumber('');
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error fetching book:', error);
      Alert.alert('Error', 'Tente novamente mais tarde');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Input
          placeholder="Título do Livro"
          value={title}
          onChangeText={setTitle}
        />
        <Input
          placeholder="Número de Telefone"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <StyledButton onPress={searchBook}>
          <ButtonText>Cadastrar Livro</ButtonText>
        </StyledButton>
      </Container>
    </>
  );
};