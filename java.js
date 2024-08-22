let button1 = document.querySelectorAll('button');

let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
button1[0].addEventListener('click', (e)=>{
    e.preventDefault()

    let email = document.querySelector('input');
    let error = document.querySelector('.error');
    let mainContainer = document.querySelector('.main-container');
    let container1 = document.querySelector('.container1');
    let container2 = document.querySelector('.container2');
    let container3 = document.querySelector('.container3');
    if (!validEmail.test(email.value)){
        error.classList.add('block');
        email.style.borderColor = '#FF8488';
        email.style.backgroundColor = '#FFD6D6';
         email.style.outline= 'none';
    }
    else{
        container1.classList.add('none');
        container2.classList.add('none');
        mainContainer.style.display = 'none';
        container3.classList.add('block');
        
    }
})
button1[1].addEventListener('click', (e)=>{
    window.location.reload();
})


