// const tinderUser = new Object() // singleton object

const tinderUser = {}      // Nonsingleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
            email: "some@gmail.com",
            fullname: {
                        userfullname: {
                                    firstname: "Anjali",
                                    lastname: "Kushwaha"
                        }
            }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
            1: "a",
            2: "b"
}
const obj2 = {
            3: "c",
            4: "d"
}
const obj3 = {
            5: "e",
            6: "f"
}

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5);

const users = [
            {
                        id: 1,
                        email: "ak@gmail.com"
            },

            {
                        id: 1,
                        email: "ak@gmail.com"
            },
            {
                        id: 1,
                        email: "ak@gmail.com"
            },
            {
                        id: 1,
                        email: "ak@gmail.com"
            },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.entries(tinderUser.hasOwnProperty('isLogged')));

const course = {
            coursename: " Java Script",
            price: "999",
            courseInstructor: "Hitesh Sir."
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



