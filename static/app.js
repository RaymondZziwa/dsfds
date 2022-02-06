
const contactForm = document.querySelector('.contact-form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let mail = document.getElementById('mail');
let phonenumber = document.getElementById('phonenumber');
let msg = document.getElementById('msg');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        fname:fname.value,
        lname:lname.value,
        mail:mail.value,
        phonenumber:phonenumber.value,
        msg:msg.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            fname.value = '';
            lname.value = '';
            mail.value = '';
            phonenumber.value = '';
            msg.value = '';
        }else{
            alert('something went wrong.');
        }
    }

    xhr.send(JSON.stringify(formData));
})