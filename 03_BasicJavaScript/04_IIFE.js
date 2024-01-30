// Immediately invoked function expression (IIFE)

(function one(){
            // named IIFE
            console.log("DB Connected");
})();


( () => {
            // unnamed IIFE
            console.log("DB Connected two");
})();

( (name) => {
            // Parameter IIFE
            console.log(`DB Connected two ${name}`);
})('anjali')