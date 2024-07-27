/* 
* Ejercicio 1
*/
document.addEventListener('DOMContentLoaded', () => {
    const greenBtn = document.getElementById('greenBtn');
    const redBtn = document.getElementById('redBtn');
    const blueBtn = document.getElementById('blueBtn');
    const exColor = document.getElementById('exColor');

    greenBtn.addEventListener('click', function() {
        document.getElementById('exColor').style.color = 'green';
    });

    redBtn.addEventListener('click', function() {
        document.getElementById('exColor').style.color = 'red';
    });

    blueBtn.addEventListener('click', function() {
        document.getElementById('exColor').style.color = 'blue';
    });
    
});
/* 
* Ejercicio 8
*/
document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM usando const para arrow function
    const clickButton = document.getElementById('clickButton');
    const clickCount = document.getElementById('clickCount');
    const message = document.getElementById('message');

    let counter = 0;

    // Arrow function para actualizar el contador y mostrar mensajes
    const updateClickCount = () => {
        counter++;
        clickCount.textContent = counter;

        // Mostrar mensaje de felicitación al alcanzar cierta cantidad de clics
        if (counter === 10) {
            message.textContent = '¡Felicidades! Has alcanzado 10 clics.';
        } else if (counter === 20) {
            message.textContent = '¡Eres increíble! Llegaste a 20 clics.';
        } else if (counter === 30) {
            message.textContent = '¡Estás en fuego! 30 clics alcanzados.';
        }
    };

    // Event listener para el botón de clics
    clickButton.addEventListener('click', updateClickCount);
});