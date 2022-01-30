
/* 
1) Generare 5 numeri casuali e mostrarli in un alert all'utente.
2) Dall'ok  parte un timer di 30 secondi. - NB: L'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok. -
3) Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
 */
console.log('JS OK')

const isValidNumber = (number, min, max) => {
    if (isNaN(number) || number < min || number > max) return false;
    return true;
};

const getUserNumber = (min, max) => {
    let userGuess;
    while (!isValidNumber(userGuess, min, max)) {
        userGuess = parseInt(prompt(`ìnserisci un numero da ${min} a ${max}`).trim());
    }
};

// 1) Random Unique Numbers generator
const getRandomUniqueNumbers = (min, max, tot) => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const numbers = [];
    while (numbers.lenght < tot) {
        const randomNumber = getRandomNumber(min, max);
        if(!numbers.includes(randomNumber)) numbers.push(randomNumber);
    } 
    return numbers;
};

const min = 1;
const max = 100;
const total = 5;

const numbers = getRandomUniqueNumbers(min, max, total);

console.log(numbers);

alert(numbers);

// 2

setTimeout(() => { 
    const userNumbers = [];
    const correctNumbers = [];

    while (userNumbers.lenght < total) {
        // Valid Number
        const userGuess = getUserNumber(min, max);
        // Already choosen Number
        if(userNumbers.includes(userGuess)) {
            alert('Already choosen');
        } else {
            userNumbers.push(userGuess);
            if (numbers.includes(userGuess)) correctNumbers.push(userGuess);
        }
    }

    let message= 'No matches';

    if (correctNumbers.lenght) {
        message = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`;
    }

    alert(message);
}, 30000);