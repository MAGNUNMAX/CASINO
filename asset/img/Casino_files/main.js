

let boton = document.querySelector('.boton');
boton.addEventListener('click', () => {
    let count = 0;
    let randomNumber1, randomNumber2, randomNumber3;

    // Cambiar las imágenes tres veces antes de mostrar el último valor seleccionado aleatoriamente
    let interval = setInterval(() => {
        if (count < 40) {
            // Obtener nuevos números aleatorios para las imágenes
            randomNumber1 = Math.floor(Math.random() * 9) + 1;
            randomNumber2 = Math.floor(Math.random() * 9) + 1;
            randomNumber3 = Math.floor(Math.random() * 9) + 1;

            // Llamar a la función para cambiar las imágenes
            handleRandomNumber(randomNumber1, randomNumber2, randomNumber3);

            count++;
        } else {
            // Limpiar el temporizador después de tres cambios
            clearInterval(interval);

            // Establecer la última imagen seleccionada aleatoriamente
            let lastRandomNumber = Math.floor(Math.random() * 9) + 1;
            handleRandomNumber(randomNumber1, randomNumber2, lastRandomNumber);
        }
    }, 50); // Cambia las imágenes cada 200 milisegundos
});

function handleRandomNumber(number1, number2, number3) {
    // Construir las rutas de las imágenes
    let random_1 = './asset/img/icon_' + number1 + '.png';
    let random_2 = './asset/img/icon_' + number2 + '.png';
    let random_3 = './asset/img/icon_' + number3 + '.png';

    // Obtener elementos de imagen del DOM
    let imagen1 = document.getElementById('icon_1');
    let imagen2 = document.getElementById('icon_2');
    let imagen3 = document.getElementById('icon_3');

    // Establecer las nuevas imágenes en el DOM
    imagen1.setAttribute('src', random_1);
    imagen2.setAttribute('src', random_2);
    imagen3.setAttribute('src', random_3);

   
    let texto = document.querySelector('#texto');
     machineWeel();
    //verificar el resultado y generar texto en dom
    if(number1=== number2 && number2 === number3){
        texto.innerText = 'YOU ARE A WINNER';
    }else{
        texto.innerText = 'TRY AGAIN';
       
    }
}

function machineWeel(){
    var audio = new Audio('./asset/sound/machine-wheel2.wav');
    audio.play();
    
    
}