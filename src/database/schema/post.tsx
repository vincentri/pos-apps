import {tableSchema} from '@nozbe/watermelondb/Schema';

export default tableSchema({
  name: 'posts',
  columns: [
    {name: 'title', type: 'string'},
    {name: 'subtitle', type: 'string', isOptional: true},
    {name: 'body', type: 'string'},
    {name: 'is_pinned', type: 'boolean'},
  ],
});
