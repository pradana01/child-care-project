const { Agency } = require("../models");
const axios = require("axios");
const compareSync = require("../helper/compareBcrypt");
const jsonWebToken = require("../helper/jwtUser");
const { Op } = require("sequelize");
const bcrypt = require("../helper/hashPass");

class AgencyController {
  static agencyRegister(req, res, next) {
    let agency = "";
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
      phone,
    } = req.body;
    Agency.create({
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
      phone,
    })
      .then((data) => {
        // res.status(201).json(parent);
        agency = data;
        return axios({
          url: "https://childcare-0c99.restdb.io/mail",
          method: "post",
          headers: {
            "x-apikey": "ee5cfda68df25bdcc62d6f247dfafe3661fad",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          data: {
            // 'to': `${req.userData.email}`,
            to: agency.email,
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
                                      agency.fullname
                                    }</h2><hr>
                                    <p class="card-text">User Name: ${
                                      agency.username
                                    }</p>
                                    <p class="card-text" style="color:seagreen;">Email: ${
                                      agency.email
                                    } </p>
                                    <p class="card-text" style="color:blue;">BirthDate: ${
                                      agency.dob
                                    }</p><hr>
                                    <p class="card-text"><small class="text-muted">Published at: ${new Date(
                                      agency.createdAt.toDateString()
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
          agency,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static agencyLogin(req, res, next) {
    const { username, password } = req.body;
    Agency.findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    })
      .then((data) => {
        if (!data || !compareSync(password, data.password)) {
          next({ name: "LOGIN_VALIDATION_ERROR" });
          //   } else if(data.emailVerified === false) { // comment line 116 & 117 for login testing without email verification
          //     next({ name: 'EMAIL_VALIDATION_ERROR'})
        } else {
          const access_token = jsonWebToken(data);
          res.status(200).json({ message: "Login Successful", access_token });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static updateAgencyCredential(req, res, next) {
    const agencyId = req.userData.id;

    const { email, password, username } = req.body;
    let agencyPassword = "";

    Agency.findOne({
      where: {
        id: agencyId,
      },
    })
      .then((data) => {
        if (
          data.email != email &&
          data.username != username &&
          !compareSync(password, data.password)
        ) {
          agencyPassword = bcrypt(password);
          Agency.update(
            {
              email,
              password: agencyPassword,
              username,
            },
            {
              where: {
                id: agencyId,
              },
            }
          )
            .then((updatedAgency) => {
              return Agency.findOne({
                where: {
                  id: agencyId,
                },
              });
            })
            .then((data) => {
              const access_token = jsonWebToken(data);
              res.status(200).json({
                agency: data,
                access_token,
              });
            });
        } else if (
          data.email != email &&
          data.username == username &&
          compareSync(password, data.password)
        ) {
          Agency.update(
            {
              email,
            },
            {
              where: {
                id: agencyId,
              },
            }
          )
            .then((updatedAgency) => {
              return Agency.findOne({
                where: {
                  id: agencyId,
                },
              });
            })
            .then((data) => {
              const access_token = jsonWebToken(data);
              res.status(200).json({
                agency: data,
                access_token,
              });
            });
        } else if (
          data.email == email &&
          data.username != username &&
          compareSync(password, data.password)
        ) {
          Agency.update(
            {
              username,
            },
            {
              where: {
                id: agencyId,
              },
            }
          )
            .then((updatedAgency) => {
              return Agency.findOne({
                where: {
                  id: agencyId,
                },
              });
            })
            .then((data) => {
              const access_token = jsonWebToken(data);
              res.status(200).json({
                agency: data,
                access_token,
              });
            });
        } else if (
          data.email == email &&
          data.username == username &&
          !compareSync(password, data.password)
        ) {
          agencyPassword = bcrypt(password);
          Agency.update(
            {
              password: agencyPassword,
            },
            {
              where: {
                id: agencyId,
              },
            }
          )
            .then((updatedAgency) => {
              return Agency.findOne({
                where: {
                  id: agencyId,
                },
              });
            })
            .then((data) => {
              const access_token = jsonWebToken(data);
              res.status(200).json({
                agency: data,
                access_token,
              });
            });
        } else if (
          data.email == email &&
          data.username == username &&
          compareSync(password, data.password)
        ) {
          res.status(200).json({
            agency: data,
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static updateAgencyBiograph(req, res, next) {
    const {
      image,
      kelurahan,
      alamat,
      pinPoint,
      fullname,
      kodePos,
      alternateEmail,
      phone,
    } = req.body;

    Agency.findOne({
      where: {
        id: req.userData.id,
      },
    })
      .then((data) => {
        if (data.phone == phone) {
          return Agency.update({
            image,
            kelurahan,
            alamat,
            pinPoint,
            fullname,
            kodePos,
            alternateEmail,
          }).then((updatedAgency) => {
            res.status(200).json({
              msg: "Update succeeded",
            });
          });
        } else {
          return Agency.update({
            image,
            kelurahan,
            alamat,
            pinPoint,
            fullname,
            kodePos,
            alternateEmail,
            phone,
          }).then((updatedAgency) => {
            res.status(200).json({
              msg: "Update succeeded",
            });
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = AgencyController;
