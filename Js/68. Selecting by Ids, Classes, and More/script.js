console.log("Soumodip DAS")

// let b = document.getElementsByClassName("box")
// console.log(b)

// b[2].style.backgroundColor = "red "

// document.getElementById("red").style.backgroundColor = "red"
// FIRST WALA
// document.querySelector(".box").style.backgroundColor = "green"
// document.querySelectorAll(".box").forEach(e =>{
//     console.log(e)
// })
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "red"
})
document.getElementsByTagName("div")
 
e = document.getElementsByTagName("div")                                     
// HTMLCollection(21) [div.container, div.box, div.box, div.box, div#red.box, div.box, div.box, div.box, div#volume-booster-visusalizer, div.sound, div.sound-icon, div.sound-wave.sound-wave_one, div.sound-wave.sound-wave_two, div.sound-wave.sound-wave_three, div.segments-box, div.segment, div.segment, div.segment, div.segment, div.segment, div#monica-content-root.monica-widget, red: div#red.box, volume-booster-visusalizer: div#volume-booster-visusalizer, monica-content-root: div#monica-content-root.monica-widget]
e[4].matches("#red.box")
// false
e[3].closest("html")
e[3].closest("html")
// {/* <html lang=​"en">​<head>​…​</head>​<body monica-version=​"5.10.5" monica-id=​"ofpnmcalabcbjgholdjcjblkibolbppb">​…​</body>​</html>​ */}