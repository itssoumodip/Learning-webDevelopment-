const user = {
    userName : "soumodip",
    price : 99,

    welcomeMes : function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }

}
 
// user.welcomeMes();
// user.userName = "soumo";
// user.welcomeMes();

// console.log(this);

// function one () {
//     let userName = "soumodip"
//     console.log(this.userName)
// }
// one()

// const one = function () {
//         let userName = "soumodip"
//         console.log(this.userName)
// }

const one = () => {
        let userName = "soumodip"
        console.log(this)
}
// one();

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }


// IMPLICIT RETURN ->
// const addTwo = (num1, num2) => num1+num2;
// const addTwo = (num1, num2) => (num1+num2);
// notes -> if i use paranthesisi then i dont have to use return keyword  
const addTwo = (num1, num2) => ({userName: "soumodip"});
console.log(addTwo(3,5))