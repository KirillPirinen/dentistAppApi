'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Patient }) {
      this.belongsTo(Patient, { foreignKey: 'patient_id' })
    }
  }
  Card.init({
    patient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
