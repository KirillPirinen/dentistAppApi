'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patients', [
      {
      name: 'John',
      lname: 'Doe',
      phone:'79250683600',
      doctor_id:1,
      createdAt:new Date(),
      updatedAt:new Date()
      },
      {
        name: 'Ivan',
        lname: 'Doe',
        phone:'79250683600',
        doctor_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
          name: 'Petr',
          lname: 'Doe',
          phone:'79250683600',
          doctor_id:1,
          createdAt:new Date(),
          updatedAt:new Date()
          },
          {
            name: 'Sesil',
            lname: 'Doe',
            phone:'79250683600',
            doctor_id:1,
            createdAt:new Date(),
            updatedAt:new Date()
          }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
