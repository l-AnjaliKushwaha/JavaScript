// const userEmail = "anjali@gmail.com"
const userEmail = []

if(userEmail){
            console.log("Got user email");
}
else{
            console.log("Don't have user email");
}

// falsy value

// false, 0 , -0, BigInt 0n, "", null, undefind, NaN

// truthy value

// "0", 'false, " ", [], {}, function(){}

if(userEmail.length === 0){
            console.log("Array is empty");
}

const emtyObj = {}

if(Object.keys(emtyObj).length === 0){
            console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefind

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefind ?? 15
// val1 = null ?? 10 ?? 10

console.log(val1);


// Turniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")


