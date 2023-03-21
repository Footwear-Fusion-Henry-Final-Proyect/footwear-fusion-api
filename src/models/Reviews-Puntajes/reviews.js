const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Reviews-Puntuacion", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    punctuation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
