const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("TalleProduct", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    talle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });
};
