// Include environment variables
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

// Init fastify app
const app = require("fastify")({ logger: true });

// MYSQL connection. Provides sequelize connection object.
app.register(require("../plugins/sequelizeConnect"));

// CORS settings
app.register(require("@fastify/cors"), {
  origin: true,
  allowedHeaders: ["Origin", "Accept", "Content-Type"],
  methods: ["GET"],
});

// Swagger for API documentation and endpoints schema management
const swagger = require("./config/swagger");
app.register(require("@fastify/swagger"), swagger.options);

// API routes
app.register(require("./routes"), { prefix: "/" });

// Start app server
const start = async () => {
  try {
    await app.listen({
      port: process.env.SERVER_PORT,
      host: process.env.SERVER_ADDRESS,
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
