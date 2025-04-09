import Model, { belongsTo, hasMany } from '@ember-data/model';

export default class SyncUser extends Model {
  @belongsTo('profile', { async: false, inverse: null }) profile;
  @hasMany('dog', { async: false, inverse: null }) dogs;
}
