//For Each

//for Each loop is also Known as callBack 
const coding = ["js", "ruby", "java", "python", "cpp"]

//in call back rules - i. does not have func. name
coding.forEach( function (item) {
    // console.log(item)
})

//for each loop - with Arrow Function
coding.forEach( (item) => {
    // console.log(item)
})

function printMe (item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        lanName: "Javascript",
        lanFileName: "js"
    },
    {
        lanName: "python",
        lanFileName: "py"
    },
    {
        lanName: "c++",
        lanFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lanName);
})