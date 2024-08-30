class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`UserName: ${this.username}`)
    }

    static createId () {
        return `123`
    }
}

const Soumodip = new User ("soumodip")
// console.log(Soumodip.createId)

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}
const iphone = new Teacher ("iphone", "i@gogle.com")
iphone.logMe()
// note- static for not give any function to other objects 
console.log(iphone.createId())