// we have to Genarate a random color 
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6; i++) {
        color+= hex[Math.floor(Math.random() * 16)]
    }
    // console.log(color)
    return color;
}
// console.log(randomColor()); 
let intervalId;
const startChnagingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor,1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    } 
}
const stopChnagingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChnagingColor)
document.querySelector('#stop').addEventListener('click', stopChnagingColor)