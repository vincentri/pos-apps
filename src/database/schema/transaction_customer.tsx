import {tableSchema} from '@nozbe/watermelondb/Schema';

export default tableSchema({
  name: 'transaction_customers',
  columns: [
    {name: 'uuid', type: 'string'},
    {name: 'transaction_id', type: 'string'},
    {name: 'name', type: 'string'},
    {name: 'phone_number', type: 'number'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
