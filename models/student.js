'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    fullname: DataTypes.STRING,
    shortname: DataTypes.STRING,
    birthday: DataTypes.DATE,
    avatarUrl: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    biography: DataTypes.STRING,
    gradeLevel: DataTypes.STRING,
    strength: DataTypes.STRING,
    challenges: DataTypes.STRING,
    learningGoal: DataTypes.STRING,
    preferedLearningMethod: DataTypes.STRING,
    engagementStyle: DataTypes.STRING,
    studyHabit: DataTypes.STRING,
    parentExpectation: DataTypes.TEXT,
    parent1Fullname: DataTypes.STRING,
    parent1AvatarUrl: DataTypes.STRING,
    parent1PhoneNumber: DataTypes.STRING,
    parent1Email: DataTypes.STRING,
    parent2Fullname: DataTypes.STRING,
    parent2AvatarUrl: DataTypes.STRING,
    parent2PhoneNumber: DataTypes.STRING,
    parent2Email: DataTypes.STRING,
    tutorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};