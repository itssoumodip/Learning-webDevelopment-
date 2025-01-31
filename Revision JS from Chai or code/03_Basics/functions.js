function sayMyName ()
{
    console.log("Soumodip");
}

sayMyName();

function addTwoNo (number1, number2)
{
    let result = number1+number2;
    return result;
}
const result = addTwoNo(3,4);
console.log("Result : ", result);

function logUserMes(username="Hitesh") 
{
    // if(username==undefined)
    if (!username)
    {
        console.log("Please Enter a Username");
        return;
    }
    return`${username} just logged in`;
}

console.log(logUserMes("Soumodip"));
console.log(logUserMes());

function calculate(...n) 
{
    return n;
}
// console.log(calculate(5,8,1,2));

const user = {
    username: "soumodip",
    price: 199
}

function handleObject(anyobj) {
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}
// handleObject(user);
handleObject({
    username: "soumo",
    price: 399
});

const myNewArr = [200,232,233,42];

function returnSecondValue (getArray) 
{
    return getArray[1];
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([23,342,423,23]));