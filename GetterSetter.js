class User {
            constructor(email, password){
                this.email = email;
                this.password = password
            }
        
            get email(){
                return this._email.toUpperCase()
            }
            set email(value){
                this._email = value
            }
        
            get password(){
                return `${this._password}anjali`
            }
        
            set password(value){
                this._password = value
            }
        }
        
        const anjali = new User("anjali@gmail.com", "abc")
        console.log(anjali.email);