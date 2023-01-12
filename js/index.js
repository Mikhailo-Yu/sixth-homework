// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

document.write('1.Вивести на сторінку в один рядок через кому числа від 10 до 20. Відповідь: ');

let value = '10';

for (let i = 11; i <= 20; i = i + 1) {
    value = value + ', ' + i; 
}
document.write(value + '.');

// 2. Вивести квадрати чисел від 10 до 20.

document.write('<br>' + '2. Вивести квадрати чисел від 10 до 20. Відповідь: ');

let number = '';

for (let i = 10; i <= 20; i = i + 1) {
    number = number + ' ' + i * i; 
}
document.write(number + '.');

// 3. Вивести таблицю множення на 7.

document.write('<br>' + '3. Вивести таблицю множення на 7. Відповідь: ' + '<br>');

let numberSeven;
let expression = '';

for (let i = 1; i <= 10; i = i + 1) {
    numberSeven =  7 * i;
    expression = expression + '7 X ' + i + ' = ' + numberSeven + '<br>';
}
document.write(expression);

// 4. Знайти суму всіх цілих чисел від 1 до 15.

document.write('4. Знайти суму всіх цілих чисел від 1 до 15. Відповідь: ');

let sum = 0;

for (let i = 1; i <= 15; i = i + 1) {
    sum =  sum + i; 
}
document.write(sum + '. ');

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

document.write('<br>' + '5. Знайти добуток усіх цілих чисел від 15 до 35. Відповідь: ');

let multiplication = 1;

for (let i = 15; i <= 35; i = i + 1) {
    multiplication =  multiplication * i;
    console.log(multiplication)
}
document.write(multiplication + '.');

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

document.write('<br>' + '6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500. Відповідь: ');

let Avrg = 0;

for (let i = 1; i <= 500; i = i + 1) {
    Avrg =  Avrg + i;
}
document.write(Avrg/500 + '.');

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

document.write('<br>' + '7. Вивести суму лише парних чисел в діапазоні від 30 до 80. Відповідь: ');

let sumOdd = 0;

for (let i = 30; i <= 80; i = i + 1) {
    if (i % 2 === 0 ) {
        sumOdd =  sumOdd + i;
    }
}
document.write(sumOdd + '.');

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

document.write('<br>' + '8. Вивести всі числа в діапазоні від 100 до 200 кратні 3. Відповідь: ');

let needNumbers = '102';

for (let i = 103; i <= 200; i = i + 1) {
    if (i % 3 === 0 ) {
        needNumbers = needNumbers + ', ' + i; 
    }
}

document.write(needNumbers + '.');

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
document.write('<br>' + '9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');

let natureNumber = prompt('До завдання 9. Введіть будь-яке натуральне число.');
let str = ' ';
let count = 0;
let sumOddDel = 0;

for (let i = 1; i <= natureNumber; i = i + 1) {
    if (natureNumber % i === 0 ) {
        
        str  = str + ' ' + i; 
        if (i % 2 === 0 ) {
            count = count + 1;
            sumOddDel = sumOddDel + i;
        }
    }
  }

document.write(' Ваше натуральне число: ' + natureNumber + '. ' + 'Його дільники: ' + str + '.');

// 10. Визначити кількість його парних дільників.

document.write('<br>' + ' 10. Визначити кількість його парних дільників. Кількість парних дільників: ');

document.write(count + '.');

// 11. Знайти суму його парних дільників.

document.write('<br>' + ' 11. Знайти суму його парних дільників. Cума парних дільників: ');

document.write(sumOddDel + '.');

// 12. Надрукувати повну таблицю множення від 1 до 10.
document.write('<br>' + '12. Надрукувати повну таблицю множення від 1 до 10.' + '<br>');

let result;

for (let i = 1; i <= 10; i = i + 1) {
    document.write(`Таблиця множення числа ${i}` + '.' + '<br>');
    for (let j = 1; j <= 10; j = j + 1) {
        result = i * j;
        document.write(`${i} X ${j} = ${result}` + '<br>');
    }
}