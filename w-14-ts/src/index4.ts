// let nums = [1,2,3,4,5,6,7,8,9]
// function getMax(nums: number[]): number {
//   let max = -100000000000;
//   for(let i = 1; i < nums.length; i++){
//     if(nums[i] > max){
//       max = nums[i];
//     }
//   }
//   return max;
// }
// console.log("Max")
// console.log(getMax(nums)); // Output: 15

interface UserInterface {
  firstName: string;
  lastName: string;
  age: number;
}

let u1 : UserInterface = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

let u2: UserInterface = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 25
}

let u3: UserInterface = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 12
}

let arr: UserInterface[] = [u1, u2, u3]

function LegalUsers(arr: UserInterface[]): boolean[]{
  return arr.map((user) => user.age > 18);
}

console.log(LegalUsers(arr)) // Output: [true, true, false]