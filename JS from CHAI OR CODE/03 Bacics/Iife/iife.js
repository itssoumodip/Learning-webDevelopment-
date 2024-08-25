// Immediate Invoked Function Expressions (IIFE)

// function chai(){
//     console.log("DB connected")
// }
// chai()

//   |
//   v   FOR THIS WE USE

(function chai(){
    console.log("DB connected")
})();
// Arrow Function-
( () => {
    console.log("ARROW FUNCTION")
})();

( (name) => {
    console.log(`Name is ${name}`)
})("Soumodip");