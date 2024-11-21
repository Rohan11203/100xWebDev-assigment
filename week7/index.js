const express = require("express");
const mongoose = require("mongoose");
const { auth, JWT_SECRET } = require("./auth");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://rohanshikhare410:AQ8ZPGXLfg0OPUtl@cluster0.nk6up.mongodb.net/Todo-App-Rohan"
);
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {

  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(6).max(30),
  });
  const parsedDatawithSucess = requiredBody.safeParse(req.body);
  if(!parsedDatawithSucess){
    return res.status(400).json({ message: "Invalid input" });
  }
  const { email, password } = req.body;
  try {
    const hashpassword = await bcrypt.hash(password, 5);
    await UserModel.create({
      email: email,
      password: hashpassword,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Error creating user" });
  }

  res.json({
    message: "you are signed in successfully",
  });
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await UserModel.findOne({
      email: email,
    });

    if(!response){
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(password, response.password);

    if(!passwordMatch){
      return res.status(401).json({ message: "Invalid credentials" });
    }
      const token = jwt.sign(
        {
          userId: response._id.toString(),
        },
        JWT_SECRET
      );

      res.json({
        message: "you are signed in successfully",
        token: token,
      });
    
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

app.post("/todo", auth, async (req, res) => {
  const user = req.userId;
  const { title, description } = req.body;
  const todo = await TodoModel.create({
    userId: user,
    title: title,
    description: description,
  });

  console.log("Todo added", todo.title);
  res.json({
    message: "Todo created successfully",
    userId: user,
    todo,
  });
});

app.get("/todo", auth, async (req, res) => {
  const user = req.userId;
  const todos = await TodoModel.find({ userId: user });
  console.log("Todos fetched", todos);
  res.json({
    message: "Todos fetched successfully",
    userId: user,
    todos,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
