"use strict";

const { hashSync } = require("bcrypt");
const {
  generateRandomPhoneNumber,
  generateRandomBirthday,
  generateRandomEmail,
  generateRandomCountry,
} = require("../utils/generators");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullname: "Lý Vĩ Phong",
          shortname: "Phong",
          birthday: new Date("2003-04-28"),
        },
        {
          fullname: "Lý Hồng Nhiên",
          shortname: "Nhiên",
          birthday: new Date("2001-01-08"),
        },
      ].map((user) => ({
        ...user,
        avatarUrl: "https://picsum.photos/200",
        phoneNumber: generateRandomPhoneNumber(),
        email: generateRandomEmail(),
        country: generateRandomCountry(),
        address: "184 Lê Đại Hành, Quận 11, TP.HCM",
        biography:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
        password: hashSync("123456789", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
