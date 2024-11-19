// Definimos la función que muestra un alert con "¡Hola Mundo!"
function simulador() {
    // Capturamos los datos del formulario
    const nombres = document.getElementById('nombres').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const inversion = parseInt(document.getElementById('inversion').value);
    const tiempo = document.getElementById('tiempo').value;
    const contenedorPre =document.getElementById('pre');
    const contenedorPost =document.getElementById('post');
    const tiempoShow = document.getElementById('tiempo-show');
    const interesShow= document.getElementById('interes-show');
    const nombresShow = document.getElementById('nombres-show');
    const emailShow= document.getElementById('email-show');
    const gananciaShow = document.getElementById('ganancia-show');
    const totalShow = document.getElementById('total-show');

   
    let interes=0;
    let total=0;

    contenedorPost.classList.remove('disabled');
    contenedorPre.classList.add('disabled');
    nombresShow.innerText=nombres;
    emailShow.innerText=email;
    
    switch (tiempo) {
        case "1":
            tiempoShow.innerText ="12 Meses";
            interesShow.innerText ="0.8%";
            interes=(inversion* 0.008)*12;
            total = inversion + interes;
            gananciaShow.innerText=interes;
            totalShow.innerText=total;

            
            break;
        case "2":
            tiempoShow.innerText="24 Meses";
            interesShow.innerText ="1.3%";
            interes=(inversion* 0.013)*24;
            total = inversion + interes;
            gananciaShow.innerText=interes;
            totalShow.innerText=total;
        
            break;
        case "3":
            tiempoShow.innerText="36 Meses";
            interesShow.innerText ="1.7%";
            interes=(inversion* 0.017)*36;
            total = inversion + interes;
            gananciaShow.innerText=interes;
            totalShow.innerText=total;
            
            break;
    
        default:
            break;
    }

}

// Seleccionamos el botón por su id
const boton = document.getElementById('simulador-btn');

// Añadimos el eventListener al botón para que ejecute la función al hacer clic
boton.addEventListener('click', simulador);
