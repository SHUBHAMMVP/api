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

module.exports = async function (app, opts) {
  app.get("/:id", { schema }, async (req, res) => {
    try {
      const Country = app.db.models.Country;
      const countries = await Country.findAll();
      return res.send({ Data: countries });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err });
    }
  });
};
