let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString()); // Sun Jan 28 2024 08:43:14 GMT+0530 (India Standard Time)     

// console.log(myDate.toDateString()); // Sun Jan 28 2024

// console.log(myDate.toJSON()); // 2014-01-28T03:11:10.443Z

// console.log(myDate.toLocaleString()); // 28/1/2024, 8:42:21 am

// console.log(myDate.toLocaleTimeString()) //8:43:14 am

// console.log(typeof myDate) // object

// let myCreateDate = new Date(2024, 0, 28)
// let myCreateDate = new Date(2024, 0, 28, 5, 3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-28-2024")

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate.getUTCFullYear());
// console.log(newDate.getDay() + 1);
// console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default',{
            weekday: "long",
}));












