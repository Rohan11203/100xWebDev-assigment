
// function Gretting(name: string){
//   console.log(`Hello, ${name}!`);
// }

// Gretting("Rohan")

// function sum(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(sum(5, 10))

// function isLegal(age: number){
//   return age >= 18;
// }

// console.log(isLegal(25)) // true
// console.log(isLegal(2)) // false
function delayedCall(fn: () => void){
  setTimeout(fn, 2000);
}  

delayedCall(function(){
  console.log('Delayed message!');
})