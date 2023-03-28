const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Role", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Rol: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Customer',
    },
  },{ timestamps: false });
};
