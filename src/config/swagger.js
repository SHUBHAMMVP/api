exports.options = {
  routePrefix: "/documentation",
  exposeRoute: process.env.ENVIRONMENT === "sandbox",
  swagger: {
    basePath: "/",
    info: {
      title: "Geo Location Service",
      description: "Description",
      version: "1.0.0",
    },
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};
