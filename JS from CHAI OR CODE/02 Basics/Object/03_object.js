//Singleton <-Constractor (Literals)

//Object Literals
// Object.create

const mySum = Symbol("key1")

const JsUser = {
    name: "Soumodip",
    "full name": "Soumodip Das",
    [mySum]: "mykey1",
    age: 19,
    location: "kolkata",
    email: "soumodip@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//printing Method - 
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySum])

// chenging - 
JsUser.email = "OS.email.com"
console.log(JsUser)
// Object.freeze(JsUser) // it can be change because of Frezze [symbal key]
JsUser.email = "chatgpt"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())