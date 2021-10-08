// model/Post.js
import {Model} from '@nozbe/watermelondb';
import {field, text} from '@nozbe/watermelondb/decorators';

export default class Products extends Model {
  static table = 'products';

  @text('name') name;
  @text('price') price;
  @text('capital') capital;
  @field('unit') isPinned;
}
