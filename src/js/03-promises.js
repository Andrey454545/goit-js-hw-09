function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
import Notiflix from 'notiflix';

// пошук елементів
const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');

// ф-ція для створення обіцянки
function createPromise(position, delay) {
    // регістрація callback
    // коли promise виконається успішно виклич resolve, коли з помилкою тоді reject
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3; // якщо true виконується if і викликається resolve

            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay);
    });
    return promise;
}
// додавання слухача події для кнопки
btnCreatePromise.addEventListener('click', e => {
    e.preventDefault(); // відміна оновлення сторінки

    let firstDelay = Number(delay.value);   // конвертація затримки в число
    let firstStep = Number(step.value);   // конвертація кроку в число

    // цикл для перебору кількості введень
    for (let i = 0; i < amount.value; i += 1) {

    // передача: номера промісу, першу затримку, введену користувачем і крок
    createPromise(1 + i, firstDelay + i * delayStep)
        .then(({ position, delay }) => {

            // відображення повідомлення успіху користувачеві з бібліотеки Notiflix
            Notiflix.Notify.success(
                `Fulfilled promise ${position} in ${delay}ms`
            );
        })
        .catch(({ position, delay }) => {
            // відображення повідомлення помилки користувачеві з бібліотеки Notiflix
            Notiflix.Notify.failure(
                `Rejected promise ${position} in ${delay}ms`
            );
        });
    }
    form.reset(); // очищення поля форми
});
