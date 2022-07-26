//--------------variables----------------------
const cc = document.getElementById('CC');
const nombre = document.getElementById('username');
const email = document.getElementById('Email');
const phone = document.getElementById('Phone');
const op = document.getElementById('Op');
const form = document.getElementById('form');
const list = document.querySelectorAll('.inputs');

//---------------evento-----------------------

form.addEventListener('submit', e => {
    e.preventDefault()

    //validar Nombre.
    if (nombre.value.length < 3 || nombre.value.trim() == ''){
        error_msg('.username','Nombre no valido', false);
    }
    else{
        error_msg('.username','', true);
    }
    
    //validar numero de identificacion.
    if (cc.value.length != 10 || cc.value.trim() == '' || isNaN(cc.value)){
        error_msg('.CC','identificacion no valida', false);
    }
    else {
        error_msg('.CC','', true);
    }
    
    //validar numero de telefono.
    if (phone.value.length != 10 || phone.value.trim() == '' || isNaN(phone.value)){
        error_msg('.Phone','Telefono no valido', false);
    }
    else {
        error_msg('.Phone','', true);
    }
    
    //llamado de funciones.
    if (op.value.length != 0){
        api_res(op.value); 
    }else{
        let n = document.querySelector('.ans');
        n.innerHTML = '';
    }

    valid_mail(email.value, '.Email');

})

//---------------funciones-----------------

//funcion mensaje de validacion.
function error_msg(clase, msg, bool) {
    let N = document.querySelector(clase);
    N.lastElementChild.innerHTML = msg;

    if (bool == true){
        let N = document.querySelector(clase);
        N.lastElementChild.innerHTML = msg;
    }
}

//funcion validacion email.
function valid_mail(mail, clase1){
    let ex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let value_tru = ex.test(mail);

    if (value_tru == false) {
        let N = document.querySelector(clase1);
        N.lastElementChild.innerHTML = 'Email invalido';     
    }

    else {
        if (value_tru == true){
            let N = document.querySelector(clase1);
            N.lastElementChild.innerHTML = '';
        }      
    }
}

//funcion conexion API Math.js.
function api_res(razon){
    let N = document.querySelector('.ans')
    fetch(`http://api.mathjs.org/v4/?expr=${razon}`)
    .then((res) => res.json())
    .then((data) =>
    N.innerHTML = data);
}

   
