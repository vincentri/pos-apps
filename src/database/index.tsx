import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import migrations from './migrations';
import Model from './model';
import {DB_NAME} from '@env';
import {Platform} from 'react-native';

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  dbName: DB_NAME,
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: Platform.OS === 'ios' /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: Model,
});

export default database;
