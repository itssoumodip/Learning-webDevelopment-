const score = 400
console.log(score)

const newScore = new Number(100)
console.log(newScore)

console.log(newScore.toString().length)
console.log(newScore.toFixed(1))

const otherNo = 23.43322

console.log(otherNo.toPrecision(3))
// to make the no with commas
const no = 1000000
console.log(no.toLocaleString('en-IN'))

// max & min

// MATH ----------------------------

// console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round (4.6))
console.log(Math.ceil (4.6))
console.log(Math.floor (4.6))
console.log(Math.min (4,6,0,1,-1))
console.log(Math.max (4,6,0,1,-1))

// Random 
console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))