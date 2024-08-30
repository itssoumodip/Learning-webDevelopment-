class user {
    constructor(userName) {
        this.userName = userName
    }

    logMe () {
        console.log(`USERNAME : ${this.userName}`)
    }
}

class Teacher extends user {
    constructor(userName, email, password) {
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new Course was added by ${this.userName}`)
    }
}

const chai = new Teacher("Chai", "Chai@gmail.com", "123")
chai.addCourse()

const masalaChai = new user("masalaChai")

masalaChai.logMe()
chai.logMe()
// for chek
console.log(chai instanceof Teacher)