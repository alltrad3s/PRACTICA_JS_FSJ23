//document.querySelector("p").innerHTML = "Hello World!";

// Inyectar en el documento
const p = document.createElement('p');
p.textContent = 'Hola como has estado?';
document.body.appendChild(p);

//Button
/*
const showMessage = () => {
    alert('Here I am');
}
*/

//Input
/*
const showMessage = () => {
    let fullname = document.getElementById('fullname').value;
    console.log(fullname);

    const h1 = document.createElement('h1');
    h1.textContent = `Hola como has estado? ${fullname}`;
    document.body.appendChild(h1);
}
*/
//Input
/*
const showAge = () => {
    let age = document.getElementById('age').value;
    console.log(age);
    if (age >= 18){
        const h1 = document.createElement('h1');
        h1.textContent = `You shall pass. Age = ${age}`;
        h1.style.color = '#fcba03';
        document.body.appendChild(h1);
    } else {
        alert("Get out!");
    }
    
}
*/

//RADIO
/*
const getRadio = () => {
    //console.log("Hola");
    const getRadio = document.querySelector('input[name="radioGroup"]:checked').value;
    console.log(getRadio);
}
*/

// FORM
/* Tarea
*
* En vez de utilizar mi alerta, utilizar SwiftAlert
* Validar numero de caracteres
* Validar email con regex
*/
const validateForm = (event) => {
    event.preventDefault();

    //console.log("Validando datos");
    //console.log(event);
    console.log(event.target.fullname);
    const fullname = document.getElementById('fullname').value;
    //if (fullname != null) {
    if (fullname === " ") {
        alert("No name");
    } else {
        console.log(fullname);
    }

    const gender = document.getElementById('gender').value
    //if (gender != null) {
    if (gender === " ") {
        alert("No gender");
        return
    } else {
        console.log(gender);
    }

    const email = document.getElementById('email').value;
    //if (email != null) {
    if (email === " ") {
        alert("No email");
    } else {
        console.log(email);
    }
    
}

