// singleton
//symbols
const mySym= Symbol("key1")
// object literals
const user={
    name:"Bhavika",
    "full_name":"Bhavika Gupta",
    [mySym]:"mykey1",
    age:20,
    email:"bhavik@gmail.com"
}
console.log(user.name);
console.log(user["full_name"]);
console.log(user[mySym]);

user.email="bhavika@paruluniversity.ac.in"
// Object.freeze(user);//usong freeze we can't change value 
user.email="bhavi@"
console.log(user);


//****  function */
user.greeting=function(){
    console.log("hello js user");
}
user.greeting2=function(){
    console.log(`hello user ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());

//***  singleton */
// const user1=new Object()

const user1={}
user1.id="123"
user1.name="bhavika"
console.log(user1)

const user2={
name:"bhavika",
full_name:{
    userfullName:{
    firstName:"bhavika",
    lastNmae:"gupta"
}
}
}
console.log(user2.full_name.userfullName.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4);
const obj4={...obj1,...obj2,...obj3}

console.log(obj4);
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(user.hasOwnProperty('name'));


//* destructure*/
const course={
    name:"hitesh",
    price:"free"
}
const{price}=course
console.log(price);

// json syntax
// {
//     "":""
// }