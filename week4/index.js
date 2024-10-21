const fs = require('fs');
const { Command } = require('commander');
const path = require('path');
const program = new Command();

const TODOS_FILE = path.join(__dirname, 'todos.json');

function loadTodos(){
  if (fs.existsSync(TODOS_FILE)) {
    const todosData = fs.readFileSync(TODOS_FILE, 'utf-8');
    return JSON.parse(todosData);
  }
  return [];
 
}

function saveTodos(todos){
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2))
}

let todos = loadTodos();
program
  .name('Todo-cli_app')
  .description('CLI For Todo App')
  .version('0.8.0');

program.command('add <todo...>')
  .description('add a new Todo')
  .action((todo) => {
    const todoText = todo.join('').trim();
    if (!todoText) {
      console.error('Please provide a todo text');
      return;
    }
    todos.push(todoText);
    saveTodos(todos);
    console.log(`Todo added: "${todoText}"`);
    })

   program
   .command('list')
   .description('list all todos')
   .action(() => {
    if(todos.length === 0){
      conspole.log('No todos Found');
    }
    todos.forEach((todo,index) =>{
      console.log(`${index+1}. ${todo}`);
    })
   })

   program
   .command('delete <index>')
   .description('delete a todo by its index')
   .action((index) => {
    if(index < 1 || index > todos.length ){
      console.log('Invalid Index');
      return;
    }
    todos.splice(index-1,1);
    saveTodos(todos);
    console.log(`${todos.indexOf(todos[index - 1]) + 1} todo(s) deleted`);
   })

   program
   .command('done <index>')
   .description('complete a todo from the list')
   .action((index) => {
     
     if (index < 1 || index > todos.length) {
       console.log('Invalid index');
       return;
     }
     todos[index - 1] = `[x] ${todos[index - 1]}`;
     saveTodos(todos); // Save the updated todos list to file
     console.log(`${todos.length} todo(s) completed`);
   });
program.parse();