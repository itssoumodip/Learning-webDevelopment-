document.getElementById('title')
{/* <h1 id=​"title" class=​"heading">​DOM learning Guys​</h1>​ */}
document.getElementById('title').id
// 'title'
document.getElementById('title').class
// undefined
document.getElementById('title').className
// 'heading'
document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute('id')
// 'title'
document.getElementById('title').getAttribute('class')
// 'heading'
document.getElementById('title').setAttribute('class', 'test')
// undefined
title
{/* <h1 id=​"title" class=​"test">​DOM learning Guys​</h1>​ */}
title.style.backgroundColor = "green"
// 'green'
title.style.padding = '15px'
// '15px'

// Intrestiong things - 
title.textContent
// 'DOM learning Guys'
title.innerHTML
// 'DOM learning Guys'
title.innerText
// 'DOM learning Guys'