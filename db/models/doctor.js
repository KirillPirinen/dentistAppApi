'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate({ Patient, Appointment }) {
      this.hasMany(Patient, { foreignKey: 'doctor_id' })
      this.hasMany(Appointment, { foreignKey: 'doctor_id' })
    }
  }
  Doctor.init({
    name: DataTypes.STRING,
    lname: DataTypes.STRING,
    specialization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};
