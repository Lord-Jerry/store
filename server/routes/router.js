const router = require('express').Router();
const validator = require('../middleware/validator');
const userController = require('../controllers/user');
const categoryController = require('../controllers/category');

const url = '/api/v1';

// POST REQUESTS

router
  .route(`${url}/register`)
  .post(
    validator.checkBodyContains('first name', 'last name', 'email', 'username', 'gender', 'password', 'password2'),
    validator.checkBodyNotEmpty('first name', 'last name', 'username', 'email', 'gender', 'password'),
    validator.checkBodyValidString('first name', 'last name', 'gender'),
    validator.checkBodyMinValue(3, 'first name', 'last name', 'username'),
    validator.checkBodyMinValue(4, 'gender'),
    validator.checkBodyMinValue(6, 'password'),
    validator.checkBodyMaxValue(30, 'first name', 'last name', 'username', 'password'),
    validator.checkBodyMaxValue(6, 'gender'),
    validator.checkGenderValid,
    validator.checkEmailValid,
    validator.checkUserNameExists,
    validator.checkEmailExists,
    validator.checkPasswordsMatch,
    userController.createAccount,
  );

router
  .route(`${url}/login`)
  .post(
    validator.checkBodyContains('email', 'password'),
    validator.checkBodyNotEmpty('email', 'password'),
    validator.checkEmailValid,
    userController.loginUser,
  );


// GET REQUESTS
router
  .route(`${url}/category/all`)
  .get(
    categoryController.getCategories,
  );

// PUT REQUESTS

// DELETE REQUESTS

module.exports = router;
