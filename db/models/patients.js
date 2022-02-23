'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate({ Doctor, Appointment, Card }) {
      this.hasOne(Doctor, { foreignKey: 'doctor_id' })
      this.hasMany(Appointment, { foreignKey: 'patient_id' })
      this.hasOne(Card, { foreignKey: 'patient_id' })
    }
  }
  Patient.init({
    name: DataTypes.STRING,
    lname: DataTypes.STRING,
    phone: DataTypes.STRING,
    doctor_id: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};
