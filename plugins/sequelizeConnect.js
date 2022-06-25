const fastifyPlugin = require("fastify-plugin");
const Sequelize = require("sequelize");

async function sequelizeConnect(fastify, opts, next) {
  const sequelize = new Sequelize({
    dialect: "mysql",
    database: "world",
    username: "root",
    password: "Admin123#",
    options: {
      host: "localhost",
      port: "3006",
    },
  });

  sequelize.models = {
    Country: require("../src/models/country")(sequelize, Sequelize),
  };

  fastify.decorate("db", sequelize);

  // close sequelize database connection
  fastify.addHook("onClose", async () => sequelize.close());

  next();
}

module.exports = fastifyPlugin(sequelizeConnect, {
  fastify: "4.x",
  name: "sequelizeConnect",
});
