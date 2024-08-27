const form = document.querySelector('form')
//this usecase will give you Empty
const height = parseInt(document.querySelector('#height').value) // to convert into int (parsINT)

form.addEventListener('submit', function(e) {
    e.preventDefault() 

    const height = parseInt(document.querySelector('#height').value) // to convert into int (parsINT)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || ) {
        results.innerHTML = "Please give a valid Height"
    }
})