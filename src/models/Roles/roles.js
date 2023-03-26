const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  //tableName: 'roles'
});


module.exports = Role;

