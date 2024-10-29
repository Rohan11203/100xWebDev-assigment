const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const JWT_SECRET = "RohanS";
let users = [];

function auth(req, res, next) {
  try {
    const token = req.headers.token;
    const verifiedToken = jwt.verify(token, JWT_SECRET);
    if (verifiedToken.username) {
      req.username = verifiedToken.username;
      next();
    } else {
      res.json({
        message: "Access denied. Invalid token.",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Access denied. Invalid token." });
  }
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });
  console.log(username, password);
  res.status(201).json({ message: "User created successfully" });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, JWT_SECRET);

  console.log(username, password);
  res.json({
    message: "User signed in successfully",
    token,
  });
});

app.get("/me", auth, (req, res) => {
  const user = users.find((user) => user.username === req.username);
  if (!user)
    return res.status(401).json({ message: "Access denied. Invalid ." });

  res.json(user);
});

app.post("/logout", auth, (req, res) => {
  
  res.json({
    message: "User logged out successfully",
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
