const myArr = [0,2,1,2,4,5,"Soumodip"]
console.log(myArr[0])

//Array Methods
// myArr.push(50)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift(90) //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr.includes(0))
console.log(myArr.indexOf(2))
// console.log(myArr)

const newArr = myArr.join()  // To convert in string 
console.log(newArr)

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log("B ", myArr);
console.log(myn1)

const myn2 = myArr.splice(1,3) // remove the elements and store 
console.log("B ", myArr);
console.log(myn2)
