const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sssss';
function auth(req, res, next) {
  const token = req.headers.token;
  
  const response = jwt.verify(token, JWT_SECRET);
  if(response){
    req.userId = response.userId;
    next();
    
  }
  else{
    res.json({message: 'Unauthorized'});
  }
}

module.exports = {
  auth,
  JWT_SECRET,
};