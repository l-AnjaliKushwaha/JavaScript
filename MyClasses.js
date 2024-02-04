// ES6

// class User{
//             constructor(username, email, password){
//                         this.username = username;
//                         this.email = email;
//                         this.password = password
//             }

//             encryptPassword(){
//                         return `${this.password}abc`
//             }

//             changeUserName(){
//                         return `${this.username.toUpperCase()}`
//             }
// }

// const anjali = new User("anjali", "anjali@gmail.com", "123")

// console.log(anjali.encryptPassword());
// console.log(anjali.changeUserName());


// behind the scene

function User(username, email, password){
            this.username = username
            this.email = email
            this.password = password
}

User.prototype.encryptPassword = function(){
            return `Encrypted ${this.password}def`
}

User.prototype.changeUserName = function(){
            return `${this.username.toUpperCase()}`
}

const sunny = new User("sunny", "sunny@gmail.com", "123")

console.log(sunny.encryptPassword);
console.log(sunny.changeUserName);