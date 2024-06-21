/*
let count = 0;

function numberRandom(){
     randomNumber = Math.floor(Math.random()*6)+1;
     return randomNumber;
     
     count++;

     if(count < 9){
        setTimeout(numberRandom,100);
     }
}

numberRandom();
   
*/

function numberRandom(callback) {
    let count = 0;

    function generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        callback(randomNumber);
        
        count++;

        if (count < 6) {
            setTimeout(generateRandomNumber, 100);
        }
    }

    generateRandomNumber();
}

// Función de devolución de llamada para manejar los números generados
function handleRandomNumber(number) {
    console.log('Número aleatorio generado:', number);
    // Aquí puedes hacer lo que quieras con el número generado
}

// Llamada a la función numberRandom con la función de devolución de llamada
numberRandom(handleRandomNumber);

