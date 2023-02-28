const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize) => {
  sequelize.define('diet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      // defaultValue: uuidv4()
    },
},
{
  timestamps: false
});
};