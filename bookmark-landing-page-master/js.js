

function display1(){
    document.querySelector('#fifthbody').style.display = 'none' 
    document.querySelector('#sixbody').style.display = 'none' 
    document.querySelector('#fouthbody').style.display='flex'
}


function display2(){
    document.querySelector('#fifthbody').style.display='flex'
    document.querySelector('#fouthbody').style.display = 'none' 
    document.querySelector('#sixbody').style.display = 'none' 
}


function display3(){
    document.querySelector('#fifthbody').style.display = 'none' 
    document.querySelector('#sixbody').style.display='flex'
    document.querySelector('#fouthbody').style.display = 'none' 
}


function block1() {
    document.querySelector('.p6').style.display = 'block' 
}

function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;
    
    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "valid email Address";
        text.style.color = "#00ff00";
    }

    else 
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "invalid email Address";
        text.style.color = "#ff0000";

    }
    
    if (email.math(pattern)){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = " ";
        text.style.color = "#00ff00";
    }
}