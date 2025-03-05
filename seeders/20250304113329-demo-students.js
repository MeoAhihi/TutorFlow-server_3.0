"use strict";

const {
  generateRandomPhoneNumber,
  generateRandomBirthday,
  generateRandomEmail,
  generateRandomCountry,
} = require("../utils/generators");

const demoStudents = [
  {
    fullname: "Lý Bội San",
    shortname: "bé Hương",
    birthday: new Date("2007-06-10"),
    address: "23 Diên Vĩ",
    gradeLevel: "Lớp 12",
    parent1Fullname: "Lý Phú Hưng",
    parent2Fullname: "Tô Thục Huệ",
  },
  {
    fullname: "Lý Trác Đông",
    shortname: "Tin",
    birthday: new Date("2007-10-07"),
    address: "112 Tùng Thiện Vương",
    gradeLevel: "Lớp 12",
    parent1Fullname: "Lý Quý Hưng",
    parent2Fullname: "Trần Thị Thảo Uyên",
  },
  {
    fullname: "Lý Uyển My",
    shortname: "Myke",
    birthday: new Date("2012-10-26"),
    address: "112 Tùng Thiện Vương",
    gradeLevel: "Lớp 7",
    parent1Fullname: "Lý Thành Hưng",
    parent2Fullname: "Nguyễn Thị Mỹ Dung",
  },
].map((student) => ({
  ...student,
  avatarUrl: "https://picsum.photos/200",
  parent1AvatarUrl: "https://picsum.photos/200",
  parent2AvatarUrl: "https://picsum.photos/200",
  phoneNumber: generateRandomPhoneNumber(),
  parent1PhoneNumber: generateRandomPhoneNumber(),
  parent2PhoneNumber: generateRandomPhoneNumber(),
  email: generateRandomEmail(),
  parent1Email: generateRandomEmail(),
  parent2Email: generateRandomEmail(),
  country: generateRandomCountry(),
  biography:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  strength:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  challenges:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  learningGoal:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  preferedLearningMethod:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  engagementStyle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  studyHabit:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  parentExpectation:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  tutorId: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

demoStudents.push({
  fullname: "Châu Hồng Yến",
  shortname: "Yến",
  birthday: new Date("2007-01-01"),
  address: "110 Nguyễn Thị Minh Khai",
  gradeLevel: "Lớp 12",
  parent1Fullname: "Hồ Kim Thắm",
  avatarUrl: "https://picsum.photos/200",
  parent1AvatarUrl: "https://picsum.photos/200",
  phoneNumber: generateRandomPhoneNumber(),
  parent1PhoneNumber: generateRandomPhoneNumber(),
  email: generateRandomEmail(),
  parent1Email: generateRandomEmail(),
  country: generateRandomCountry(),
  biography:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  strength:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  challenges:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  learningGoal:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  preferedLearningMethod:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  engagementStyle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  studyHabit:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  parentExpectation:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  tutorId: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
});

demoStudents.push({
  fullname: "Nguyễn Trọng Nhân",
  shortname: "Nhân",
  birthday: new Date("2004-04-14"),
  address: "363/38/50 Bình Trị Đông",
  gradeLevel: "Người đi làm",
  avatarUrl: "https://picsum.photos/200",
  phoneNumber: generateRandomPhoneNumber(),
  email: generateRandomEmail(),
  country: generateRandomCountry(),
  biography:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  strength:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  challenges:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  learningGoal:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  preferedLearningMethod:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  engagementStyle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  studyHabit:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate",
  tutorId: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Students", demoStudents);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Students", null, {});
  },
};
