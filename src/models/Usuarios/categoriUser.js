const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Role = sequelize.define("Role", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Rol: {
      type: DataTypes.STRING,
      values: ["admin", "customer"],
      allowNull: false,
      defaultValue: 'customer',
    },
  },{ timestamps: false });

  Role.afterSync(async () => {
    const defaultRoles = ["admin", "customer"];

    for (let rol of defaultRoles) {
      const existingRol = await Role.findOne({ where: { Rol: rol } });
      if (!existingRol) {
        await Role.create({ Rol: rol });
      }
    }
  });

  return Role;
};
