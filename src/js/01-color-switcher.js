
// пошук елементів
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.disabled = true;     // податковий стан кнопки: вимкнена
let colorInterval = null;    // таймер для зміни кольору

// ф-ція для отримання випадкового кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// додаємо слухача подій для кнопки СТАРТ
btnStart.addEventListener('click', () => {
    btnStart.disabled = true;   // деактивація кнопки СТАРТ
    btnStop.disabled = false;   // деактивація кнопки СТОП

    // таймер для зміни кольору
    colorInterval = setInterval(() => {

    // покраска фону у випадковий колір
        document.body.style.background = getRandomHexColor();
    }, 1000);   // зміна кольору 1 раз за секунду
});

// додаємо слухача подій до кнопки СТОП
btnStop.addEventListener('click', () => {

    // очистка таймеру для зміни кольору
    clearInterval(colorInterval);

    btnStart.disabled = false; // активація кнопки СТАРТ
    btnStop.disabled = true; // активація кнопки СТОП
});




