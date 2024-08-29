const user = { // litraly object    
    username: "Soumodip",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`UserName: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// new is constractor function 

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }
    // return this // by default return;
}

const userOne = new User("Soumodip Das", 12, true)
const userTwo = new User("Chai Aur Code", 11, false)
console.log(userOne)
console.log(userTwo)

/*
NOTES:-
-> after we use new keywords- a new empty object is created, called instance
step 1 - object created
step 2 - constractor func. called with new keyword
step 3 - in this keyword injects the arguments
step 4 - we got the result
*/