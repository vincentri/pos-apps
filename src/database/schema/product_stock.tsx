import {tableSchema} from '@nozbe/watermelondb/Schema';

export default tableSchema({
  name: 'product_stocks',
  columns: [
    {name: 'uuid', type: 'string'},
    {name: 'product_id', type: 'string', isIndexed: true},
    {name: 'qty', type: 'number'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
