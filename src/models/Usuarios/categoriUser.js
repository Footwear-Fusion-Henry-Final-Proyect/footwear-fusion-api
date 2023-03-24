const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("CategoriUser", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Customer',
    },
  },{ timestamps: false });
};
