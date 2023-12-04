const form = document.querySelector('form');
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value

form.addEventListener('submit', function(e){
    // whenever form is submitted it's values goes to server or URL that we want to prevent bcoz wedon't have any of these
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
    results.innerHTML= `Please enter valid height ${height}`;
    }else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML= `Please enter valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        results.innerHTML=`<span>${bmi}\n</span>`;
        if(bmi < 18.6){
            results.innerHTML=`You are Under weight`;
        }else if(bmi > 24.9){
            results.innerHTML=`You are Overweight`;
        }

    }
    
})