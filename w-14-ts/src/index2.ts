
// interface User {
//   name: string
//   age: number
//   address?:  {
//     street: string
//     city: string
//   }
// }

// let user: User = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York"
//   }
// }

// let user2: User = {
//   name: "Jane Doe",
//   age: 25,
// }

// function getUser(user: User){
//   console.log(user.name);
// }

// function getAddress(user: User){
//   console.log(user.address);
// }

// getUser(user2)
// getAddress(user)


interface People {
  name: string
  age: number
  // greet(): string
  // greet2: () => string
}

let person : People = {
  name: "John Doe",
  age: 30,
  
  // greet2: (): string => {
  //   return `Hello, my name is !`;
  // }
}

// console.log(person.greet2())

class Manager implements People {
  name: string; // We can do this.name
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  } 
}

let user = new Manager("Johan", 30);
console.log(user);