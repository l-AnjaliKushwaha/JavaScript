const name = "Anjali"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anjali-AK')

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "     anjali       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anjali.com/anjali%20kushwaha"
console.log(url.replace('%20', '_'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));