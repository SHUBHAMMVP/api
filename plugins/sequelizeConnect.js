const fastifyPlugin = require("fastify-plugin");
const Sequelize = require("sequelize");

async function sequelizeConnect(fastify, opts, next) {
  //Initialize sequelize object
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

  //Attach models
  sequelize.models = {
    Country: require("../src/models/country")(sequelize, Sequelize),
  };

  //Decorate sequelize object to make it avaialble via plugin
  fastify.decorate("db", sequelize);

  // close sequelize database connection
  fastify.addHook("onClose", async () => sequelize.close());

  next();
}

//Export sequelize connection plugin object
module.exports = fastifyPlugin(sequelizeConnect, {
  fastify: "4.x",
  name: "sequelizeConnect",
});
