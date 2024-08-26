
// Acumelator - blank empty variable 
// Current Value - the array value that is i

const myNums = [1,5,10]

// const myTotal = myNums.reduce(function (acc, cv) {
//     console.log(`acc: ${acc} and currval: ${cv}`)
//     return acc+cv
// }, 0)

const myTotal = myNums.reduce ( (acc,cv)=> acc+cv, 0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Alu",
        price: 15
    },
    {
        itemName: "Piyaj",
        price: 5
    },
    {
        itemName: "Carrot",
        price: 10
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(priceToPay)