const user = {
            name: "Anjali",
            price: 999,

            welcomeMessage: function(){
                        console.log(`${this.name} welcome to website`);
                        console.log(this);

            }
}

// user.welcomeMessage()

// user.name = "Sunny"

// user.welcomeMessage()

// console.log(this);


// function one() {
//             userName: "anjali"
//             console.log(this.userName);
// }
// one()

// const Two = function() {
//             userName: "anjali"
//             console.log(this.userName);
// }
// Two()


// const Three = () => {
//             userName: "anjali"
//             console.log(this.userName);
// }
// Three()


// const addNumber = (num1, num2) => {
//             return num1 + num2
// }
// console.log(addNumber(2, 2));


//const addNumber = (num1, num2) => num1 + num2 

// const addNumber = (num1, num2) => (num1 + num2)

const addNumber = (num1, num2) => ({name: "anjali"})

console.log(addNumber(2, 2));