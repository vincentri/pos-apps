import {tableSchema} from '@nozbe/watermelondb/Schema';

export default tableSchema({
  name: 'transaction_details',
  columns: [
    {name: 'uuid', type: 'string'},
    {name: 'transaction_id', type: 'string'},
    {name: 'product_name', type: 'string'},
    {name: 'qty', type: 'number'},
    {name: 'price', type: 'number'},
    {name: 'capital_price', type: 'number'},
    {name: 'total_capital', type: 'number'},
    {name: 'total', type: 'number'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
