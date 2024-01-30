// Functions -- Defination

// function sayMyName() {
//             console.log('A');
//             console.log('N');
//             console.log('J');
//             console.log('A');
//             console.log('L');
//             console.log('I');
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//             console.log(number1 + number2);
// }

// // addTwoNumbers(2, 2)
// //    addTwoNumbers(2, "3")
//    addTwoNumbers(2, null)

// const Ans = addTwoNumbers(3, 3)

// console.log("Ans :", Ans);


// function addTwoNumbers(number1, number2){
// //            let result = number1 + number2
// //            return result
//            console.log("anjali"); // return ke bad kuch bhi print nhi hota hai.

//            return number1 + number2

// }

// const result = addTwoNumbers(3, 3)
//  console.log("result :", result);

function loginUserMessage(userName){
            if(!userName){
                        return 'Please enetr your user name.'
            }

            return `${userName} is just login.`
}

const msg = loginUserMessage("Anjali")
console.log(msg);



// function calculateCartPrice(...num){ // rest operator
//             return num
// }
// console.log(calculateCartPrice(200, 300, 500, 2000));


function calculateCartPrice(val1, val2, ...num){ // rest operator
            return num
}

console.log(calculateCartPrice(200, 300, 500, 2000));


// *************************** Function with Objects **********************************

const user = {
            userName: " Anjali ",
            price: 999
}

function   displayUserNameAndPrice(anyObject){
            console.log(`The use name is ${anyObject.userName} and price is ${anyObject.price}.`); 
}

// console.log(displayUserNameAndPrice(user));

displayUserNameAndPrice({
            userName: " Sunny ",
            price: 888
})


// *************************** Function With Array ****************************************

const MyArray = [200, 300, 400, 500, 600]

function getSecondValue(getArray){
            return getArray[1]
}

// console.log(getSecondValue(MyArray));
console.log(getSecondValue([1000, 7000, 5000, 2000]));