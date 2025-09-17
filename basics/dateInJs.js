//dates
let myDate=new Date()
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);
let myDate1=new Date("2025-01-14")
console.log(myDate1.toLocaleString());
console.log(myDate1.toLocaleString('default',{
    weekday:"long",
}));
console.log(myDate1.getDay());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp.getTime);//minutes
console.log(Math.floor(Date.now()/1000));//seconds

