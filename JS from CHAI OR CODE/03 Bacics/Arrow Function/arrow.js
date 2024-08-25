const user = {
    username: "Soumodip",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to Website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "soumo"
user.welcomeMessage()

console.log(this)

function chai (){
    let username = "soumo"
    console.log(this);
}

chai()

const chai = function () {
    let username = "Soumodip"
    console.log(this.username);
}
 
// arrow function - 
// const chai = () => {
//     let username = "Soumodip"
//     console.log(this);
// }
// chai()

// Explicit type -1 
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// implicit type -2
// const addTwo = (num1, num2) => num1+num2
// type -3 
// const addTwo = (num1, num2) => (num1+num2)


// const addTwo = (num1, num2) => ({username: "Soumodip"})
// console.log(addTwo(2,3))

// const myArr = [2,3,4,5,6]
// myArr.forEach()