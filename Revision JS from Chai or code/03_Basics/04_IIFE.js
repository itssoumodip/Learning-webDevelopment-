// Immediately Invoked Function Expression (IIFE)

// function one () {
//     console.log(`DB CONECTED`)
// }
// one()

// ->> 
(function one () {
    console.log(`DB CONECTED`)
})();


// with arrow function 
( (name) => {
    console.log(`DB CONECTED ${name}`)
})("soumodip");