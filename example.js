const Knex = require('knex');
const { Model } = require('objection');

const Cmt = require('./models/cmt');

// This cause an error
require('collections');

const config = {
  "client": "pg",
  "debug": false,
  "connection": {
    "host" : "uos-backend-postgres-test.dev",
    "user" : "uos",
    "password" : "uos",
    "database" : "uos_backend_app"
  },
};

const knex = Knex(config);

Model.knex(knex);


(async () => {
  const withIdeas = await Cmt.query()
    .eager('ideas');

  console.dir(withIdeas);
})();


