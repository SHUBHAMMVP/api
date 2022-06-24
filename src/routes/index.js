const path = require("path");

// Loads all the routes matching to the module exports structure under the specified folder.
const autoload = require("@fastify/autoload");

module.exports = (app, opts, next) => {
  app.register(autoload, {
    dir: path.join(__dirname, "v1"),
    options: { prefix: "/v1" },
  });

  next();
};
