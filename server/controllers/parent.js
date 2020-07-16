const { Parent } = require("../models");
const axios = require("axios");
const { Op } = require('sequelize')
const compareSync = require('../helper/compareBcrypt')
const jsonWebToken = require('../helper/jwtUser')

class ParentController {
  static parentRegister(req, res, next) {
    let parent = "";
    const {
      username,
      image,
      email,
      dob,
      kelurahan,
      alamat,
      pinPoint,
      fullname,
      password,
      kodePos,
      alternateEmail,
      sex,
      phone,
    } = req.body;
    Parent.create({
      username,
      image,
      email,
      dob,
      kelurahan,
      alamat,
      pinPoint,
      fullname,
      password,
      kodePos,
      alternateEmail,
      sex,
      phone,
    })
      .then((data) => {
        // res.status(201).json(parent);
       parent = data;
        return axios({
          url: "https://childcare-0c99.restdb.io/mail",
          method: "post",
          headers: {
            "x-apikey": "ee5cfda68df25bdcc62d6f247dfafe3661fad",
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          data: {
            // 'to': `${req.userData.email}`,
            to: parent.email,
            subject: `Hai ${fullname}`,
            html: `
                    <h1 style="text-align: center;">Here it is!</h1>
                    <div class="card mb-3" style="max-width: 540px; margin-left: auto; margin-right: auto; border: 5px solid royalblue; border-radius:5%;">
                        <div class="row no-gutters" style="text-align: center;">
                            <div class="col-md-4" style="text-align: center;">
                                <img src="https://www.freeiconspng.com/uploads/blue-round-letter-f-icon-png-11.png
                                " class="logo-footer" style="height: 250px;">
                            </div>
                            <div class="col-md-8" style="text-align: center;">
                                <div class="card-body" style="text-align: center;">
                                    <h2 class="card-title">Full Name: ${
                                      parent.fullname
                                    }</h2><hr>
                                    <p class="card-text">User Name: ${
                                      parent.username
                                    }</p>
                                    <p class="card-text" style="color:seagreen;">Email: ${
                                      parent.email
                                    } </p>
                                    <p class="card-text" style="color:blue;">BirthDate: ${
                                      parent.dob
                                    }</p><hr>
                                    <p class="card-text"><small class="text-muted">Published at: ${new Date(
                                      parent.createdAt.toDateString()
                                    )}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 style="color: grey; text-align: center;">© Child Care 2020. All rights reserved.</h6>
                `,
          },
        });
      })
      .then(() => {
        res.status(201).json({
          message: "Successfully registered",
          parent
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static parentLogin(req, res, next) {
    const {
      username,
      password
    } = req.body;
    Parent.findOne({
      where: {
        [Op.or]: [
          { username },
          { email: username }
        ]
      }
    })
    .then((data) => {
      if(!data || !compareSync(password, data.password)) {
        next({ name: 'LOGIN_VALIDATION_ERROR' })
      } else if(data.dataValues.emailVerified === false) { // comment line 116 & 117 for login testing without email verification
        next({ name: 'EMAIL_VALIDATION_ERROR'})
      } else {
        console.log(data.dataValues.emailVerified)
        const access_token = jsonWebToken(data)
        res.status(200).json({ message: 'Login Successful', access_token })
      }
    })
    .catch((err) => {
      next(err)
    })
  }
}

module.exports = ParentController;
