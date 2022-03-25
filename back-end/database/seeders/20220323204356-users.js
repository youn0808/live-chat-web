"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Andrea",
        lastName: "Garcia",
        email: "andrea@gmail.com",
        password: bcrypt.hashSync("secrete", 10),
        gender: "female",
      },
      {
        firstName: "Seunghwan",
        lastName: "Youn",
        email: "seung@gmail.com",
        password: bcrypt.hashSync("secrete", 10),
        gender: "male",
      },
      {
        firstName: "Booker",
        lastName: "mr",
        email: "jane.doe@gmail.com",
        password: bcrypt.hashSync("secrete", 10),
        gender: "male",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
