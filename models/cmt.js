const { Model }  = require('objection');

const Ideas = require('./ideas');

class Cmt extends Model {
  static get tableName() {
    return 'cmt';
  }

  static get relationMappings() {
    return {
      ideas: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ideas,
        join: {
          from: 'cmt.idea',
          to: 'ideas.id'
        }
      }
    }
  };
}

module.exports = Cmt;
