const user = {
            userName: "anjali",
            loginCount: 7,
            signedIn: true,

            getDetails: function(){
                        // console.log("Got user details from database");
                        // console.log(`Username : ${this.userName}`);
                        console.log(this);
            }
}

console.log(user.userName);
// console.log(user.getDetails());
console.log(this);


// constructor

function User(username, logincount, isloggedin){
            this.username = username;
            this.logincount = logincount;
            this.isloggedin = isloggedin;

            this.greeting = function(){
                        console.log(`welcome ${this.username}`);
            }

            //return this
}

const userOne = new User("anjali", 12, true)
const userTwo = new User("sunny", 11, false)
console.log(userOne);
console.log(userTwo);
