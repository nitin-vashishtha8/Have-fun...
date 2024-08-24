const buttons = document.querySelectorAll('.button')
const body = document.querySelector(body)

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(nit) {
        console.log(nit);
        console.log(nit.target);
        if (nit.target.id === 'saffron') {
        body.style.backgroundColor = nit.target.id 
        }
        if (nit.target.id === 'white') {
        body.style.backgroundColor = nit.target.id            
        }
        if (nit.target.id === 'blue') {
        body.style.backgroundColor = nit.target.id    
        }
        if (nit.target.id === 'green') {
            body.style.backgroundColor = nit.target.id
        }
    });
});