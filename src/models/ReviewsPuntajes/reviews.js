const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ReviewsPuntuacion", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    punctuation: {
      type: DataTypes.STRING,
    },
    review: {
      type: DataTypes.STRING,
    },
  });
};
