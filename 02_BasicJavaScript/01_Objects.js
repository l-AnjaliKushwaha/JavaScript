// Objects in Java Script
// Object Creation
// Object Literals

const MySym = Symbol("MyKey1")

const User = {
            name: "Anjali",
            "full name": "Anjali Kushwaha",
            age: 20,
            [MySym]: "MyKey1",
            location: "Bhopal",
            email: "anjali364@gmail.com",
            isLoggedIn: false,
            lastLogginDays: ["Monday", "Sarurday"]
}

// console.log(User.email);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[MySym]);
// console.log(typeof User.MySym);

User.email = "anju66@gmail.com"
// Object.freeze(User)
User.email = "ak@gmail.com"
console.log(User);

User.greeting = function(){
            console.log("Hello Users!");
}
User.greetingTwo = function(){
            console.log(`Hello Users! ${this["full name"]}`);
}

// console.log(User.greeting);
console.log(User.greeting());
console.log(User.greetingTwo());


