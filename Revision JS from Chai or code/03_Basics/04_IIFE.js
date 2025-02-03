// Immediately Invoked Function Expression (IIFE)

// function one () {
//     console.log(`DB CONECTED`)
// }
// one()

// ->> 
(function one () {
    //named IIFE
    console.log(`DB CONECTED`)
})();


// with arrow function 
( (name) => {
    //unnamed IIFE
    console.log(`DB CONECTED ${name}`)
})("soumodip");