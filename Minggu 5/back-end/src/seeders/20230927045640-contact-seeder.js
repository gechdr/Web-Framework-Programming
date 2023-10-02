"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("contacts", [
      {
        name: "Yolla",
        phone: "08100000000",
        favorite: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Zoey",
        phone: "08111111111",
        favorite: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Anne",
        phone: "08122222222",
        favorite: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contacts", null);
  },
};
