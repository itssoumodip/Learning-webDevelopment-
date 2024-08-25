// Primitive - Non-primitive 

// Primitive - 7 types - String, Number, Boolean, null, undefined, symbol, BigInt
// Reference (NON Primitive) - Array, Objects, Functions


// Stack (premitive), Heap(Non-Primitive)
// stack - 
let myName = "soumodip das"
let anotherName = myName
anotherName = "soumodip"
console.log(myName)
console.log(anotherName)

//Heap - 
let user = {
    email : "user@gmail.com",
    upi : "user@upi"
}
let user2 = user
user2.email = "soumodip@gmail.com"
console.log(user)
console.log(user2)