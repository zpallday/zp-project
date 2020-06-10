const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

// secrets = secrets[process.env.NODE_ENV];

module.exports =  {
  myprivate: function (req, res, next)  {
  const token = req.headers.authorization;
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
    if (error) {
      res.status(401).json({ you: 'shall not passes!' })
    }
      req.decodedToken = decodedToken
      next()
    })
},


}
