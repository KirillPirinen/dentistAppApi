'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'Doctors',
          key:'id'
        }
      },
      avatar: {
        type: Sequelize.STRING,
        defautlValue:null
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
    await queryInterface.dropTable('Patients');
  }
};
