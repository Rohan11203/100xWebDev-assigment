const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  email: { type: String, unique: true},
  password: String,
})

const Todo = new Schema({
  userId: ObjectId,
  title: String,
  description: String,
});

const UserModel = mongoose.model("User", User);
const TodoModel = mongoose.model("Todo", Todo);

module.exports = { UserModel, TodoModel };