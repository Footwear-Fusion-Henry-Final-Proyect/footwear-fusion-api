const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const UserState = sequelize.define("UserState", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    state: {
      type: DataTypes.ENUM,
      values: ["New", "Active", "Inactive", "Blocked"],
      defaultValue: "New",
      allowNull: false,
    },
  }, { timestamps: false });
//para crear los estados por defectos
  UserState.afterSync(async () => {
    const defaultStates = ["New", "Active", "Inactive", "Blocked"];

    for (let state of defaultStates) {
      const existingState = await UserState.findOne({ where: { state: state } });
      if (!existingState) {
        await UserState.create({ state: state });
      }
    }
  });

  return UserState;
};
