import { Realm } from '@realm/react';

export class Book extends Realm.Object<Book> {
  static schema: Realm.ObjectSchema = {
    name: 'Book',
    primaryKey: '_id',

    properties: {
      _id: 'uuid',
      title: 'string',
      photo: 'string',
      description: 'string',
      user: 'User'
    }
  }

  // Método para gerar um novo livro
  static generate() {
    return {
      _id: new Realm.BSON.UUID(),
      title: '',
      photo: '',
      description: '',
      user: null,
    };
  }
}

export class RentedBook extends Realm.Object<RentedBook> {
  static schema: Realm.ObjectSchema = {
    name: 'RentedBook',
    primaryKey: '_id',

    properties: {
      _id: 'uuid',
      book: 'Book',
      user: 'User',
      phoneNumber: 'string'
    }
  }

  // Método para registrar um livro alugado
  static generate() {
    return {
      _id: new Realm.BSON.UUID(),
      book: null,
      user: null,
      phoneNumber: '',
    };
  }
}

export class User extends Realm.Object<User> {
  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: '_id',

    properties: {
      _id: 'uuid',
      name: 'string',
      email: 'string',
      phoneNumber: 'string',
      registeredBooks: { type: 'list', objectType: 'Book' },
      rentedBooks: { type: 'list', objectType: 'RentedBook' }
    }
  }

  // Método para criar um novo usuário
  static generate() {
    return {
      _id: new Realm.BSON.UUID(),
      name: '',
      email: '',
      phoneNumber: '',
      registeredBooks: [],
      rentedBooks: [],
    };
  }
}
