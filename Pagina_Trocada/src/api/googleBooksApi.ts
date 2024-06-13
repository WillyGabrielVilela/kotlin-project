import axios from 'axios';

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBookDetails = async (title: string) => {
  const response = await axios.get(`${GOOGLE_BOOKS_API_URL}?q=intitle:${title}`);
  const book = response.data.items[0].volumeInfo;

  return {
    title: book.title,
    author: book.authors[0],
    description: book.description,
    thumbnail: book.imageLinks.thumbnail,
  };
};
