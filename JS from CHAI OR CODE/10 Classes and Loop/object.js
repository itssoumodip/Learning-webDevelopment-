function multi (num) {
    return num*5;
}

// multi(5)
multi.power = 2
console.log (multi(5))
console.log (multi.power)
console.log (multi.prototype)

const creatUser(username, score) {
    this.username = username;
    this.score = score;
}