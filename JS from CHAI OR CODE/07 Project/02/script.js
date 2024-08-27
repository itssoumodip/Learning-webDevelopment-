const form = document.querySelector('form')
//this usecase will give you Empty
const height = parseInt(document.querySelector('#height').value) // to convert into int (parsINT)

form.addEventListener('submit', function(e) {
    e.preventDefault() 

    const height = parseInt(document.querySelector('#height').value) // to convert into int (parsINT)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)) {
        results.innerHTML = `Please give a valid Height ${Height}`;
    } else if (weight === '' || weight<0 || isNaN(weight)) 
    {
        results.innerHTML = `Please give a valid Weight ${Weight}`;
    } else 
    {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // show the result 
        document.querySelector('#results').style.color = "red"
        results.innerHTML = `<span>${bmi}</span>`
    }
    // if()) {
    //     results.innerHTML = `Please give a valid Height ${Height}`;
    // } else if ()) 
    // {
    //     results.innerHTML = `Please give a valid Weight ${Weight}`;
    // } else 
    // {
    //     // show the result 
    //     weight-guide.innerHTML = `<span>${bmi}</span>`
    // }
    // // results.innerHTML = `${height}`

})