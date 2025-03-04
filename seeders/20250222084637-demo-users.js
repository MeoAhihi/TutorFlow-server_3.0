"use strict";

const { hashSync } = require("bcrypt");

function generateRandomPhoneNumber() {
  return "0" + Math.floor(Math.random() * 1e9);
}
function generateRandomBirthday() {
  const start = new Date(1990, 0, 1);
  const end = new Date(2010, 0, 1);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function generateRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  return `user${Math.floor(Math.random() * 1e6)}@${
    domains[Math.floor(Math.random() * domains.length)]
  }`;
}
function generateRandomCountry() {
  const countries = [
    "Vietnam",
    "USA",
    "UK",
    "France",
    "Germany",
    "Japan",
    "China",
    "Korea",
  ];
  return countries[Math.floor(Math.random() * countries.length)];
}
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
