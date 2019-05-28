const Knex = require('knex');
const { Model } = require('objection');

const Cmt = require('./models/cmt');

const Sequelize = require('sequelize');

const { ContainerBuilder } = require('node-dependency-injection');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

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


