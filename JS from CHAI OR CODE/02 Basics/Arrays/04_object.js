// const tinderUser = new Object () //Singleton Object
const tinderUser = {} //NON - Singleton Object
tinderUser.id = "123abc"
tinderUser.name = "Soumodip"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "soumodip@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Soumodip",
            lastName: "Das"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userFullName)
console.log(regularUser.fullname.userFullName.firstName)
console.log(regularUser.fullname.userFullName.lastName)

console.log("------------------------------")

const obj1 = {1:"A", 2: "B"}
const obj2 = {3:"c", 4: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //Target - source
const obj3 = {...obj1, ...obj2}
console.log(obj3)

// if the value from database -
const users = [
    {
        id: 1, 
        email: "soumodip@gmail.com"
        
    },
    {
        id: 2, 
        email: "soumodip@gmail.com"

    },
    {
        id: 3, 
        email: "soumodip@gmail.com"

    }
]

console.log(users[0].id)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))