let a = 10

if(true){
            let a = 30
            const b = 30
            var c = 30
            console.log("INNER : ",a);
}

//  console.log(a);
// console.log(b);
// console.log(c);


function One(){
            const userName = "Anjali"
            function Two(){
                        const website = "youtube"
                        console.log(userName);
            }
            // console.log(website);
            Two()
}
// One()

if(true){
            const name = "Anjali"

            if(name === "Anjali"){
                        const surname = " Kushwaha"
                        console.log(name + surname);
            }
            // console.log(surname);
}
// console.log(name);


//********************************* Interesting ***************************************

console.log(addOne(5));
function addOne(num){
            return num + 1
}

console.log(addTwo(5));
const addTwo = function(num){
            return num + 2
}

