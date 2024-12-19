// interface User {
//   name: string;
//   address: string;
//   age: number;
//   email: string;
//   phone: string;
// }

// type UpdateProps = Pick<User, 'name'| 'email' | 'address'>

// function updateUser(updateProps: UpdateProps){
//   // Implement logic to update user's properties
// }

// ReadOnly

// interface User {
//   readonly name: string;
//   age: number;
//   email: string;
// }

// let user: Readonly<User> = {
//   name: "John Doe",
//   age: 30,
//   email: "john.doe@example.com"
// }

// user.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
// user.email = "jane@example.com"; // Error: 


// Record
// It is often used when you need to create an object with a consistent structure where the keys and their value types are predictable.
// Key value Pair
// type UserRoles = Record<'admin' | 'editor' | 'viewer', string>;

// const roles: UserRoles = {
//   admin: "Admin User",
//   editor: "Content Editor",
//   viewer: "Read-Only User",
// };


// interface User{
//   name: string;
//   age: number;
//   email: string;
// }

// type Users = Record<string,User>; // Record

// let user: Users= {
//   "xyzID": {name: "rohan", age:90, email: "rohan@example.com"},
//   "abcID": {name: "john", age:20, email: "john@example.com"}
// }

// Map
type User = {
  name: string;
  age: number;
  email: string;
}

let users = new Map<string, User>();

users.set("xyzID", {name: "rohan", age:90, email: "rohan@example.com"});

let user = users.get("xyzID");

console.log(user); // Output: {name: "rohan", age: 90, email: "rohan@example.com"}