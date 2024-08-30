const clock = document.getElementById('clock');
 // const colck = document.querySelector('.clock');


setInterval(function (){
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)