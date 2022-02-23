'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [
      {
      doctor_id: 1,
      patient_id: 2,
      type_id:1,
      clinic_id:1,
      date: new Date(),
      createdAt:new Date(),
      updatedAt:new Date()   
      },
      {
        doctor_id: 1,
        patient_id: 2,
        type_id:1,
      clinic_id:1,
        date: new Date(),
        createdAt:new Date(),
        updatedAt:new Date()   
        },
        {
          doctor_id: 1,
          patient_id: 3,
          type_id:1,
      clinic_id:1,
          date: new Date(),
          createdAt:new Date(),
          updatedAt:new Date()   
          },
          {
            doctor_id: 1,
            patient_id: 3,
            type_id:1,
            clinic_id:1,
            date: new Date(),
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
