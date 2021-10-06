import {appSchema} from '@nozbe/watermelondb';
import post from './post';

const tables = [post];

export default appSchema({
  version: 1,
  tables,
});
