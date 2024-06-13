import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Header } from '../../components/Header';
import RoundedButton from '../../components/RoundedButton';
import { 
  Container, 
  SuggestionsContainer, 
  SuggestionsTitle, 
  BookItem, 
  GridContainer, 
  BookImage, 
  NoImageContainer, 
  NoImageText 
} from './styles';
import { getData, clearStorage } from '../../storage/storage';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    thumbnail: string;
  };
  phoneNumber: string;
}

export function Home() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooksFromStorage();
  }, [isFocused]);

  const fetchBooksFromStorage = async () => {
    try {
      const storedBooks = await getData('books');
      if (storedBooks && Array.isArray(storedBooks)) {
        setBooks(storedBooks);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error('Error fetching books from storage:', error);
    }
  };

  const handleSearch = async (text: string) => {
    setQuery(text);
  };

  const handleBookPress = (book: Book) => {
    navigation.navigate('book', { bookId: book.id });
  };

  const handleRegisterBook = async () => {
    navigation.navigate('addbook');
    await fetchBooksFromStorage();
  };

  const handleClearStorage = async () => {
    await clearStorage();
    setBooks([]);
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => handleBookPress(item)}>
      <BookItem key={item.id}>
        {item.volumeInfo && item.volumeInfo.thumbnail ? (
          <BookImage
            source={{ uri: item.volumeInfo.thumbnail }}
            resizeMode="cover"
          />
        ) : (
          <NoImageContainer>
            <NoImageText>No Image Available</NoImageText>
          </NoImageContainer>
        )}
      </BookItem>
    </TouchableOpacity>
  );

  return (
    <Container>
      <Header />
      <ScrollView>
        <SuggestionsContainer>
          <SuggestionsTitle>Sugestão de Livros</SuggestionsTitle>
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
            refreshing={false}
            onRefresh={fetchBooksFromStorage}
          />
        </SuggestionsContainer>
      </ScrollView>
      <RoundedButton onPress={handleRegisterBook} />
    </Container>
  );
}