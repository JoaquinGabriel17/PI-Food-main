const { DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notIn: [["Soy una receta", "susana horia"]]
      }
    },
    id:{
      type: DataTypes.UUID,
      // autoIncrement: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    dish_resume: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    healthScore: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate:{
        max: 50.0,
        min: 5.0
      }
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    db: {
      type: DataTypes.STRING,
      defaultValue: true
    },
    dietas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      foreignKey: 1
    }
  },
  {
    timestamps: false
  });
};
