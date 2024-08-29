// create the promise 
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task 
    //DB calls, cryptography, netword
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
} )


// consume the promise 
promiseOne.then(function () {
    console.log("Promise Consumed")
})


new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 Resolve");
})



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Soumodip", email: "soumodip@das.com"})
    }, 1000)
})


promiseThree.then (function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true
        // let error = false
        if (!error) {
            resolve({username: "soumodip", password: "123"})
        } else {
            reject('ERROR: Something went Wrong !!')
        }
    }, 1000)
})

// promiseFour.then().catch()
const username = promiseFour.then( (user) => {
    console.log(user)
    return user.username
}).then ((username) => { //it is called channing
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("The Promise is either resolved or rejected "))  //default - allways execute

const promiseFive = new Promise (function (resolve, reject) {
    setTimeout(function () {
        let error = true
        // let error = false
        if (!error) {
            resolve({username: "JavaScript", password: "123"})
        } else {
            reject('ERROR: JS went Wrong !!')
        }
    }, 1000) 
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json() //to convert into json 
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
    return response.json
})
.then((data)=> {
    console.log(data)
})
.catch((error)=> console.log(error))






/*
NOTS :- then have the relation with resolve 
we get call back in then means 
to conect resolve and then -> resolve
catch for Error
*/