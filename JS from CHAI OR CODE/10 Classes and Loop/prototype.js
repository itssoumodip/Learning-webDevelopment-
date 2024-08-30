let myName = "soumodip      "
let myTitle = "das      "

// console.log(myName.length)
// console.log(myName.trim().length)
// console.log(myName.truelength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.soumodip = function() {
    console.log(`Soumodip is present in all objects`)
}
heroPower.soumodip()
myHeros.soumodip()


Array.prototype.heySoumodip = function () {
    console.log("Soumodip says Hello")
}
// heroPower.heySoumodip()
myHeros.heySoumodip()


//## inheritance - 

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: "js Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
//old syntax
Teacher.__proto__ = User

//modern sysntax - 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode         "
String.prototype.trueLenght = function () {
    // console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLenght()
"soumodip".trueLenght()
"hitesh".trueLenght()