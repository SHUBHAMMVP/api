
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "country",
    {
      Code: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        defaultValue: "",
        primaryKey: true,
      },
      Name: {
        type: DataTypes.CHAR(52),
        allowNull: false,
        defaultValue: "",
      },
      Continent: {
        type: DataTypes.ENUM(
          "Asia",
          "Europe",
          "North America",
          "Africa",
          "Oceania",
          "Antarctica",
          "South America"
        ),
        allowNull: false,
        defaultValue: "Asia",
      },
      Region: {
        type: DataTypes.CHAR(26),
        allowNull: false,
        defaultValue: "",
      },
      SurfaceArea: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      IndepYear: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      Population: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      LifeExpectancy: {
        type: DataTypes.FLOAT(3, 1),
        allowNull: true,
      },
      GNP: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: true,
      },
      GNPOld: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: true,
      },
      LocalName: {
        type: DataTypes.CHAR(45),
        allowNull: false,
        defaultValue: "",
      },
      GovernmentForm: {
        type: DataTypes.CHAR(45),
        allowNull: false,
        defaultValue: "",
      },
      HeadOfState: {
        type: DataTypes.CHAR(60),
        allowNull: true,
      },
      Capital: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Code2: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        defaultValue: "",
      },
    },
    {
      sequelize,
      tableName: "country",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Code" }],
        },
      ],
    }
  );
};
