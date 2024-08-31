class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email= value;
    } 

    get password() {
        return `${this._password}Soumodip`
    }
    
    set password(value) {
        this._password = value
    }
}

const soumodip = new User("soumodip@gmail.com", "123");
console.log(soumodip.password);
console.log(soumodip.email);