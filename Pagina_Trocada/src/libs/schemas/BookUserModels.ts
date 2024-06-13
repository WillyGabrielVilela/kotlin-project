import AsyncStorage from '@react-native-async-storage/async-storage';

export class Book {
  static async generate(title: string, photo: string, description: string, user: string) {
    return {
      title,
      photo,
      description,
      user,
    };
  }
}

export class RentedBook {
  static async generate(book: string, user: string, phoneNumber: string) {
    return {
      book,
      user,
      phoneNumber,
    };
  }
}

export class User {
  static async generate(name: string, email: string, phoneNumber: string) {
    return {
      name,
      email,
      phoneNumber,
      registeredBooks: [],
      rentedBooks: [],
    };
  }

  static async save(user: User) {
    try {
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];
      users.push(user);
      await AsyncStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }
}
