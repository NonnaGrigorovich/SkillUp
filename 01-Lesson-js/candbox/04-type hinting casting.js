// Type hinting (приведение типов) - это JS делвет сам
// Casting - я сам привожу типы явно

// Приоритетность от высшей к низшей
// String
// Number
// Boolean

// console.log('Vova' === 'Vova');
// console.log('Vova' === 'Sara');

// console.log('5' + 'px');
// console.log(50 + '50');

// ===============================
// Casting

// let str = '100.5';

// console.log(typeof str);

// let result = Number(str);
// let result = parseInt(str);
// let result = parseFloat(str);
// console.log(result);
// console.log(typeof result);

// let num = 10n;
// console.log(typeof num);

//==============================
// let num = 100.5;
// // let res = String(num);
// let res = num.toString();
// console.log(res);
// console.log(typeof res);

//=============================

// let num = -123123123;
// let res = Boolean(num);
// let res = !!num;

// console.log(res);

// console.log(!!5);

// =================================
// NaN;
console.log(5 - 'px');
console.log(typeof (5 - 'px'));
// console.log(false * 'px');

console.log(typeof (10 / 0));
console.log(-10 / 0);
