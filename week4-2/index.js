const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
app.use(express.json());
const TODOS_FILE = path.join(__dirname, 'todos.json');

function loadTodos(){
    const todosData = fs.readFileSync(TODOS_FILE, 'utf-8');
    return JSON.parse(todosData);
  return [];
}
function saveTodos(todos){
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2))
}

let todos = loadTodos();
app.get('/', (req, res) => {
 console.log(todos);
  res.send('Hello World!');
})

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  saveTodos(todos);
  console.log(todo);
  res.status(201).send(todo);
})

app.delete('/todosD', (req, res) => {
  const todoId = parseInt(req.query.id);
  const index = todos.findIndex(todo => todo.id === todoId);
  if(index === -1){
    return res.status(404).send('Not Found');
  }
  todos.splice(index, 1);
  saveTodos(todos);
  res.sendStatus(204);
})


app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
})