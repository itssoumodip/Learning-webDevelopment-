//for in

const myObj = {
    js : 'javaScript',
    cpp : 'c++',
    rb : 'ruby'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming = ['js', 'css', 'html'];
for (const key in programming) {
    console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)
}