const express = require('express');
const  jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());
const JWT_SECRET = 'RohanS';
let users = [];

app.post('/signup', (req,res) => {
  const username = req.body.username
  const password = req.body.password

  users.push({
    username,
    password
  })

  res.status(201).json({ message: 'User created successfully' });
});

app.post('/signin', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const token = jwt.sign({
    username
  }, JWT_SECRET);


  console.log(username, password)
  res.json({
    message: 'User signed in successfully',
    token
  });
})

app.get('/me', (req, res) => {
  const token = req.headers.token
  const verifiedToken = jwt.verify(token,JWT_SECRET);

  const username = verifiedToken.username;
  const user = users.find(user => user.username === username)
  if (!user) return res.status(401).json({ message: 'Access denied. Invalid token.' });
  
  res.json({
    message: 'User authenticated successfully',
    user
  });
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
})