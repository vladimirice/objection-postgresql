const { Model } = require('objection');

class Ideas extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'ideas';
  }
}

module.exports = Ideas;
