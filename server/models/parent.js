"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require("../helper/hashPass");
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parent.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Usen name required" },
          notNull: { msg: "Usen name required" },
          duplicateUserrName(value) {
            return Parent.findOne({
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
            return Parent.findOne({
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
          notEmpty: { msg: "User name required" },
          notNull: { msg: "User name required" },
          underSixteen(value) {
            let currentDate = new Date().toDateString().split(" ")[3] * 1;
            let year = Number(value.toDateString().split(" ")[3]);

            let result = currentDate - year;
            if (result < 16) {
              throw new Error("Under 16 years old is not allowed to register");
            }
          },
        },
      },
      sex: DataTypes.STRING,
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
            return Parent.findOne({
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
      modelName: "Parent",
    }
  );
  Parent.beforeCreate((instance, option) => {
    const hash = bcrypt(instance);
    instance.password = hash;
    instance.emailVerified = false;
  });
  return Parent;
};
