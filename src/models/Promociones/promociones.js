const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Promotions", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER
    },
    current: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    expiration: {
        type: DataTypes.DATE,
        defaultValue: () => moment().add(15, 'days').toDate(),
    }
  });

  // Promotions.addHook(async (instance, options) => {
  //   instance.code = await Math.floor(Math.random() * 900000) + 100000;
  // });

};
