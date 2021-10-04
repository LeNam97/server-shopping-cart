const express = require('express');
const passport = require('passport')
// eslint-disable-next-line no-unused-vars
const passportConfig = require('../configs/passport')
const userController = require('../controllers/users.controller.js')
const {validateBody, schemas} = require('../helpers/routerHelpers')
const router = express.Router();
module.exports = router;

router.route('/login')
  .post(validateBody(schemas.authLoginInSchema), passport.authenticate('local', {session: false}), userController.login)
router.route('/register')
  .post(validateBody(schemas.authRegisterSchema), userController.register)
router.route('/secret')
  .get(passport.authenticate('jwt', {session: false}), userController.secret)
