const schema = {
  description: "Get",
  summary: "Summary",
  params: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
    },
  },
};

const handler = async (req, res) => {
  try {
    return res.send({ Data: req.params.id });
  } catch (err) {
    return res.status(500).send({ error: "message" });
  }
};

module.exports = function (app, opts, next) {
  app.get("/:id", { schema }, handler);
  next();
};
