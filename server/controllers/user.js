const bcrypt = require('bcrypt');
const Users = require('../models/users.js');

class user {
  /**
   * create user account
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {json}
   */
  static async createAccount(req, res, next) {
    const {
      firstname,
      lastname,
      username,
      email,
      gender,
    } = req.body;
    let { password } = req.body;
    password = bcrypt.hashSync(password, 10);

    /* eslint-disable no-console */
    console.log(password);
    const data = new Users({
      name: {
        first: firstname,
        last: lastname,
        user: username,
      },

      email,
      gender,
      password,
    });
    const result = await data.save();

    if (!result) {
      const err = new Error();
      err.message = 'error occured';
      err.statusCode = 500;
      return next(err);
    }

    return res.status(201).json({
      message: 'user account created successfully',
      result,
      statusCode: 201,
    });
  }
}

module.exports = user;
