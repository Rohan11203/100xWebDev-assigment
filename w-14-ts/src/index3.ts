interface User {
  name: string;
}

interface Admin {
  name: string;
}

type UserOrAdmin = User | Admin

let user1: User = {
  name: 'User John Doe',
}

let admin1: Admin = {
  name: 'Admin Jane Doe',
}
function GetUser(role: UserOrAdmin){
  console.log(role.name);
}

GetUser(user1)