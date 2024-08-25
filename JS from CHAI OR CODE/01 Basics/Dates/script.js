// Dates 

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toISOString())
console.log(typeof myDate)

// let myDatebyMe = new Date( 2023, 0, 23)
// console.log(myDatebyMe.toDateString())
let myDatebyMe = new Date("2023-01-12")
console.log(myDatebyMe.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp) //return milisecond
console.log(myDatebyMe.getTime()) //convert to the Milisecond

console.log(Math.floor(Date.now()/1000)) //return second

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleDateString('default', {
    weekday: "long"
})