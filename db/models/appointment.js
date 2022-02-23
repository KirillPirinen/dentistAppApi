'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate({ Doctor, Patient, Clinic, Type}) {
      this.belongsTo(Doctor, { foreignKey:'doctor_id' })
      this.belongsTo(Patient, { foreignKey:'patient_id' })
      this.belongsTo(Clinic, { foreignKey:'clinic_id' })
      this.belongsTo(Type, { foreignKey:'type_id' })
    }
  }
  Appointment.init({
    doctor_id: DataTypes.INTEGER,
    patient_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    type_id: DataTypes.INTEGER,
    clinic_id: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: [
      'coming', 
      'successful', 
      'canceledByPatient', 
      'transferredByPatient',
      'canceledByDoctor', 
      'transferredByDoctor'
    ]
    }
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
