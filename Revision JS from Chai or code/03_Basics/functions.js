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
console.log(calculate(5,8));