import Model, { belongsTo, hasMany } from '@ember-data/model';

export default class User extends Model {
  @belongsTo('profile', { async: true, inverse: null }) profile;
  @hasMany('dog', { async: true, inverse: 'user' }) dogs;
}
