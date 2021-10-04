const jwt = require('jsonwebtoken');

const isAuthenticated = function (req, res, next) {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token.replace(/^Bearer\s/, ''), process.env.JWT_SECRET, function (err, decode) {
      if (err) {
        return res.status(401).json({message: 'unauthorized'})
      } else {
        return next();
      }
    })
  } else {
    return res.status(401).json({message: 'unauthorized'})
  }
}
module.exports = {
  isAuthenticated,
}
