'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kodePos: {
        type: Sequelize.INTEGER
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
      emailVerified: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      password: {
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
    await queryInterface.dropTable('Agencies');
  }
};