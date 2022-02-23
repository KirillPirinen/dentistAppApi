'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doctors', [{
      name: 'John',
      lname: 'Doe',
      specialization: 'Терапевт',
      createdAt:new Date(),
      updatedAt:new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
   
  }
};
