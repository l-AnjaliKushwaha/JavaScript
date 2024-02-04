class User{
            constructor(username) {
                        this.username = username
            }

            logMe(){
                        console.log(`USERNAME IS ${this.username}`);
            }
}

class Teacher extends User {
            constructor(username, email, password) {
                        super(username)
                        this.email = email
                        this.password = password
            }

            addCourse(){
                        console.log(`A new course was added by ${this.username}`);
            }
}

const anjali = new Teacher("anjali", "anjali@gmail.com", "123")

anjali.addCourse()
const sunny = new User("sunny")

sunny.logMe()

console.log(anjali === sunny);
console.log(anjali === Teacher);


console.log(anjali instanceof Teacher);

console.log(anjali instanceof User);


