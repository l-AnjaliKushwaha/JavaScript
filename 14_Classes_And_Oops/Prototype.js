let myName = "anjali         "

// console.log(myName.length);
// console.log(myName.trim().length);

console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
            thor: "hammer",
            spiderman: "sling",

            getSpiderPower: function(){
                        console.log(`spidy power is ${this.spiderman}`);
            }
}


Object.prototype.anjali = function(){
            console.log(`anjali is present in all objects`);
        }
        
        Array.prototype.heyanjali = function(){
            console.log(`Hitesh says hello`);
        }
        
        // heroPower.anjali()
        // myHeros.anjali())
        // myHeros.heyanjali()
        // heroPower.heyanjali()
        
        // inheritance

        const User = {
            name: "chai",
            email: "chai@google.com"
        }
        
        const Teacher = {
            makeVideo: true
        }
        
        const TeachingSupport = {
            isAvailable: false
        }
        
        const TASupport = {
            makeAssignment: 'JS assignment',
            fullTime: true,
            __proto__: TeachingSupport
        }
        
        Teacher.__proto__ = User
        
        // modern syntax
        Object.setPrototypeOf(TeachingSupport, Teacher)
        
        let anotherUsername = "ChaiAurCode     "
        
        String.prototype.trueLength = function(){
            console.log(`${this}`);
            console.log(`True length is: ${this.trim().length}`);
        }
        
        anotherUsername.trueLength()
        "hitesh".trueLength()
        "iceTea".trueLength()