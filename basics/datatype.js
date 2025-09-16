"use strict"; //treat all js code as newer version

let age=18 //number
let name="bhaivka" //string

//number=> 2 to power 53
//bigInt

//string=>""
//boolean=>true/false
//null=>standalone value
//undefined =>when you not assign value
//symbol =>unique


//object

console.log(typeof "bhavika");

// primitive datatype return datatype object

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt


// REFERENCE TYPE(non primitive)
//Array,Objects,Functions
const heros=["havi","hari"]

let myObj={
    name:"bhavika",
    age:20,
}

const myFunction=function(){
    console.log("hello world");
}

// memory ****//
//Stack memory (primitive) gives copy of variable
let name1="bhavika"
let name2=name1
name2="gun"
console.log(name1);
console.log(name2);


//Heap(non primitive) //if we change in varible original value will be changed.
let obj1={
    name:"bhavika",
    email:"user@123"
}
let obj2=obj1
obj1.email="bhavika@413"
console.log(obj1);
console.log(obj2);
