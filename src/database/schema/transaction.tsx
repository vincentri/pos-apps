import {tableSchema} from '@nozbe/watermelondb/Schema';

export default tableSchema({
  name: 'transactions',
  columns: [
    {name: 'uuid', type: 'string'},
    {name: 'order_id', type: 'string'},
    {name: 'transaction_type', type: 'number'}, //debit | credit
    {name: 'total', type: 'number'},
    {name: 'status', type: 'string'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
