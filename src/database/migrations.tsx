import {
  addColumns,
  createTable,
  schemaMigrations,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
  migrations: [
    // {
    //   toVersion: 3,
    //   steps: [
    //     // See "Migrations API" for more details
    //     addColumns({
    //       table: 'posts',
    //       columns: [{name: 'title2', type: 'string'}],
    //     }),
    //   ],
    // },
  ],
});
