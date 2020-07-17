"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require("../helper/hashPass");
  class Agency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agency.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "User name required" },
          notNull: { msg: "User name required" },
          duplicateUserrName(value) {
            return Agency.findOne({
              where: {
                username: value,
              },
            }).then((data) => {
              if (data) {
                throw new Error("This user name is taken, try another one");
              }
            });
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Email required" },
          notNull: { msg: "Email required" },
          duplicateEmail(value) {
            return Agency.findOne({
              where: {
                email: value,
              },
            }).then((data) => {
              if (data) {
                throw new Error("This email is taken, try another one");
              }
            });
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password required" },
          notNull: { msg: "Password required" },
        },
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Full name required" },
          notNull: { msg: "Full name required" },
        },
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Birth date required" },
          notNull: { msg: "Birth date required" },
       
        },
      },
kelurahan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Kelurahan required" },
          notNull: { msg: "Kelurahan required" },
        },
      },
      kodePos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Kode pos required" },
          notNull: { msg: "Kode pos required" },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Alamat required" },
          notNull: { msg: "Alamat required" },
        },
      },
      pinPoint: DataTypes.STRING,
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Phone number required" },
          notNull: { msg: "Phone number required" },
          phoneValidation(value) {
            return Agency.findOne({
              where: {
                phone: value,
              },
            }).then((data) => {
              if (data) {
                throw new Error("This phone number is taken, try another one");
              } else if (value.length < 10) {
                throw new Error("Please input a valid phone number");
              }
            });
          },
        },
      },
      alternateEmail: DataTypes.STRING,
      image: DataTypes.STRING,
      emailVerified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Agency",
    }
  );
  Agency.beforeCreate((instance, option) => {
    const hash = bcrypt(instance.password);
    instance.password = hash;
    instance.emailVerified = false;
  });
  return Agency;
};
