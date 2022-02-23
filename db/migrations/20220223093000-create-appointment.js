'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'Doctors',
          key:'id'
        }
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'Patients',
          key:'id'
        }
      },
      date: {
        type: Sequelize.DATE
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'Types',
          key:'id'
        }
      },
      clinic_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'Clinics',
          key:'id'
        }
      },
      status: {
        type: Sequelize.ENUM,
        values: [
          'coming', 
          'successful', 
          'canceledByPatient', 
          'transferredByPatient',
          'canceledByDoctor', 
          'transferredByDoctor'
        ]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};
