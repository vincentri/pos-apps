import {tableSchema} from '@nozbe/watermelondb/Schema';

export default tableSchema({
  name: 'products',
  columns: [
    {name: 'uuid', type: 'string'},
    {name: 'name', type: 'string'},
    {name: 'price', type: 'number'},
    {name: 'capital', type: 'number', isOptional: true},
    {name: 'unit', type: 'string'},
    {name: 'minimum_stock', type: 'number'},
    {name: 'is_manage_stock', type: 'boolean'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
