const express = require('express');
const mongoose = require('mongoose');
const { auth, JWT_SECRET } = require('./auth');
const { UserModel, TodoModel } = require('./db');
const jwt = require('jsonwebtoken');


mongoose.connect('mongodb+srv://rohanshikhare410:AQ8ZPGXLfg0OPUtl@cluster0.nk6up.mongodb.net/Todo-App-Rohan');
const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  await UserModel.create({
    email : email,
    password : password
  });

  res.json({
    message: 'you are signed in successfully',
  })
  console.log({
    email : email,
    password : password
  })

});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email : email,
    password : password
  });

  if(user){
    const token = jwt.sign({
      userId : user._id.toString(),
    },JWT_SECRET);

    res.json({
      message: 'you are signed in successfully',
      token : token
    })
    console.log({
      user,
      token
    });
  }
  
});

app.post('/todo', auth, async (req, res) => {
  const user = req.userId;
  const { title , description } = req.body;
  const todo = await TodoModel.create({
    userId: user,
    title: title,
    description: description,
  })

  console.log("Todo added", todo.title);
  console.log(todo);
  res.json({
    message: 'Todo created successfully',
    userId : user,
    todo
  }
  )
});

app.get('/todo',auth, async (req, res) => {
  const user = req.userId;
  const todos = await TodoModel.find({ userId: user });
  console.log("Todos fetched", todos);
  res.json({
    message: 'Todos fetched successfully',
    userId : user,
    todos
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});