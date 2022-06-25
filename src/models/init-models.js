var DataTypes = require("sequelize").DataTypes;
var _country = require("./country");

function initModels(sequelize) {
  var country = _country(sequelize, DataTypes);


  return {
    country,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
