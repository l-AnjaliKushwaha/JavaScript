// if

// const temparature = 41

// if(temparature < 50){
//             console.log("Temparature is less than of 50.");
// }
// else{
//             console.log("Temparature is greater than of 50.");
// }
// console.log("Execute!");

//scope

// const score = 200

// if(score > 100){
//             let power = "fly"
//             console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// if else if

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

if(balance < 600){
            console.log("less than 600");
}
else if(balance < 800){
            console.log("less than 800");
}
else if(balance < 900){
            console.log("less than 900");
}
else{
            console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
            console.log("Allowed to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
            console.log("User Logged In");
}