// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 2337767489918377n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
            name: "Anjali",
            age: 22,
}

const myFuction = function(){
            console.log("Hello World");
}

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp); //null

console.log("****************************************");

// console.log(typeof myFuction);
// console.log(typeof myObj);
// console.log(typeof heros);

//****************************************************************
// stack (primitive), Heap (Non-primitive)

let myYoutubename = "AnjaliKushwahadotcom"

let anothername = myYoutubename
anothername = "AKdotcom"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
            email: "user@gmail.com",
            upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anjali@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
