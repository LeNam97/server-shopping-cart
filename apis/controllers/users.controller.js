const JWT = require('jsonwebtoken');
const passport = require('passport')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const {JWT_SECRET} = require('../configs/index')
module.exports = {
  login,
  getUser,
  secret,
  register,
}
const encodeToken = (UserId) => {
  return JWT.sign({
    iss: 'LeNam',
    sub: UserId,
    iat: new Date().getTime(),
  }, JWT_SECRET)
}

async function login(req, res) {
  console.log('asd', req.user._id)
  const token = await encodeToken(req.user._id)
  res.setHeader('Authorization', token)
  return res.json(200).json({success: true})
}

async function getUser(req, res) {
  // // TODO : userId được lấy từ value params sau khi được check vali
  const userId = req.value.params[name]
  const user = await User.findOne({_id: userId})
  return res.json(user);
}


async function register(req, res) {
  try {
    const user = req.value.body
    const isExist = await User.findOne({email: user.email})
    if (isExist) {
      return res.status(400).json({message: "User is already exists!!!"})
    }
    const newUser = new User({
      firstName: req.value.body.firstName,
      lastName: req.value.body.lastName,
      email: req.value.body.email,
      password: req.value.body.password,
    })
    await newUser.save()
    const token = encodeToken(newUser._id)
    res.setHeader('Authorization', token)
    return res.status(200).json(true)
  } catch (err) {
    return res.status(500).json({error: err})
  }

}

function secret(req, res) {
  try {
    console.log('secret function')
    return res.status(200).json({message: true})
  } catch (err) {
    return res.status(500).json({error: err})
  }
}
