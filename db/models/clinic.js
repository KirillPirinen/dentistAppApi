'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    static associate({ Appointment }) {
      this.hasMany(Appointment, { foreignKey:'clinic_id' })
    }
  }
  Clinic.init({
    title: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};
