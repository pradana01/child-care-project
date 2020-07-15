'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Parents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      emailVerified: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kodePos: {
        type: Sequelize.INTEGER
      },
      alamat: {
        type: Sequelize.STRING
      },
      pinPoint: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      alternateEmail: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      sex: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Parents');
  }
};