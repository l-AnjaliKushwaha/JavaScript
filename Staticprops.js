class User{
            constructor(username) {
                       this.username = username 
            }

            logMe(){
                        console.log(`Username: ${this.username}`);
            }
            createId(){
                        return `122`
            }
}

const anjali = new User("anjali")

console.log(anjali.createId());

class Teacher  extends User{
            constructor(username, email) {
                        super(username)
                        this.email = email
            }
}

const iphone = new Teacher("iphone", "i@gmail.com")
console.log(iphone.createId());