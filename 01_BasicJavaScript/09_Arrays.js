//Array

const MyArray = [0, 1, 2, 3, 4, 5]
const Heros = ["shaktimaan", "naagraj"]

const newArray = new Array(11, 12, 13, 14, 15)

// console.log(newArray);

// console.log(MyArray[2]);

// Array Methods

// MyArray.push(5)
// MyArray.push(6)
// MyArray.pop()

// MyArray.unshift(9)
// MyArray.shift()

// console.log(MyArray.includes(10));
// console.log(MyArray.indexOf(2));

const newArr = MyArray.join()

// console.log(MyArray);
// console.log(newArr);
// console.log(typeof newArr);
// console.log(typeof MyArray);

// Slice, Splice

console.log("A ", MyArray);

const Myn1 = MyArray.slice(1, 3)
console.log(Myn1);

console.log("B ", MyArray);

const Myn2 =  MyArray.splice(1, 3)
console.log(Myn2);

console.log("c ", MyArray);

