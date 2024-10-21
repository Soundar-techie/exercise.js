const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") ;//first place
let position1 = fruits.lastIndexOf("Apple") ;//last place
fruits.includes("Mango");//chaking in array


console.log(fruits.includes("Mango"));
const numbers = [4, 9, 16, 25, 29];
let value = numbers.find(myFunction);// only call function()
let value1 = numbers.findLast(myFunction);//last value of function()
let value2 = numbers.findIndex(myFunction);//value of place
let value3 = numbers.findLastIndex(myFunction);// last value of place

function myFunction(value) {
  return value > 18;
}
console.log(value3);