const arr1=new Array(1,2,3,4)
console.log(arr1);
const arr=[0,1,2,3,4]
const arr5=[5,6,7]
console.log(arr);
//showlaw means changing copy of arrray will change the original array
//deep copy no changes in og array
//****array methods */
// arr.push(7)
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(9)
// console.log(arr);
// console.log(arr.includes(4));
// console.log(arr.indexOf(3));

// const arr2=arr.join()
// console.log(arr);
// console.log(arr2);
//slice me end range exculde hoti h no change in or array
//splice me end range include hoti h remove the splice elements change in og array

// const arr3=arr.slice(1,3)
// console.log(arr3);
// console.log(arr);

// const arr4=arr.splice(1,3)
// console.log(arr3);
// console.log(arr);

const arr6=arr.concat(arr5)
console.log(arr6);//return new array
 
//** spread */
const arr7=[...arr,...arr5]
console.log(arr7);

console.log(Array.isArray(arr));
console.log(Array.from("bhavika"));


let num1=10;
let num2=30;
let num3=60;
console.log(Array.of(num1,num2,num3));

