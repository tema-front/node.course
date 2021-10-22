const colors = require('colors');

const [firstBoundary, secondBoundary] = process.argv.slice(2);
let arrayPrimes = [];
let result = '';

// Валидация 
if ((!+firstBoundary || !+secondBoundary) || (+firstBoundary <= 1) || (+firstBoundary > +secondBoundary)) {
    console.log(colors.red('failes: your arguments are not valid'));
    return;
}

// Фильтрация 
nextNumber: for (let i = +firstBoundary; i <= +secondBoundary; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0 ) continue nextNumber;
    }
    // Покрсаска =)
    if (arrayPrimes.length == 0 || arrayPrimes.length % 3 == 0) arrayPrimes.push(colors.green(i))
    else if (arrayPrimes.length == 1 || arrayPrimes.length % 3 == 1) arrayPrimes.push(colors.yellow(i))
    else if (arrayPrimes.length == 2 || arrayPrimes.length % 3 == 2) arrayPrimes.push(colors.red(i))

    result = arrayPrimes.join(', ')
}   

// Вывод
console.log(colors.yellow('Boundarys: '), colors.red(firstBoundary, '...', secondBoundary));
if (!result) console.log(colors.red('There are not primes within this boundarys'));
else console.log(colors.yellow('Primes in this boundary: ', colors.gray(result)));