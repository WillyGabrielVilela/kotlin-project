import { createRealmContext } from '@realm/react';

import { Book, RentedBook, User } from '../schemas/BookUserModels';

export const {
  RealmProvider,
  useRealm,
  useQuery,
  useObject
} = createRealmContext({
  schema: [Book, RentedBook, User]
});