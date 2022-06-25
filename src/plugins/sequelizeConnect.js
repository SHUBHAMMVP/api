const fastifyPlugin = require("fastify-plugin");
const Sequelize = require("sequelize");

async function sequelizeConnect(fastify, opts, next) {
  //Initialize sequelize object
  const sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    options: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
    },
  });

  //Test database connection
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    //Fatal exception, exit process
    process.exit(1);
  }

  //Attach models
  sequelize.models = {
    Country: require("../models/country")(sequelize, Sequelize),
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
