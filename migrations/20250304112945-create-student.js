'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      shortname: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      avatarUrl: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      biography: {
        type: Sequelize.STRING
      },
      gradeLevel: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.STRING
      },
      challenges: {
        type: Sequelize.STRING
      },
      learningGoal: {
        type: Sequelize.STRING
      },
      preferedLearningMethod: {
        type: Sequelize.STRING
      },
      engagementStyle: {
        type: Sequelize.STRING
      },
      studyHabit: {
        type: Sequelize.STRING
      },
      parentExpectation: {
        type: Sequelize.TEXT
      },
      parent1Fullname: {
        type: Sequelize.STRING
      },
      parent1AvatarUrl: {
        type: Sequelize.STRING
      },
      parent1PhoneNumber: {
        type: Sequelize.STRING
      },
      parent1Email: {
        type: Sequelize.STRING
      },
      parent2Fullname: {
        type: Sequelize.STRING
      },
      parent2AvatarUrl: {
        type: Sequelize.STRING
      },
      parent2PhoneNumber: {
        type: Sequelize.STRING
      },
      parent2Email: {
        type: Sequelize.STRING
      },
      tutorId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Students');
  }
};