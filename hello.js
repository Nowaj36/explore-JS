console.log('hello javaScript');

var bananaPrise = 10;
console.log(typeof bananaPrise);

var vabiMode = "sweingmode";
console.log(vabiMode);

var officeTime = "10pm";
console.log(officeTime);

var pubgTime = "1.20 am";
console.log(pubgTime);

var trainTicket = "480 BDT";
console.log(typeof trainTicket);

var name = "Nowaj Chowdhury";
console.log(name);

var isHot = true;
var isRich = false;
console.log(typeof isHot);
console.log(isRich);

var promise = "I promise I will work hard to become a programer";
// console.log(promise.split('I'));
// console.log(promise.indexOf('will'));
console.log(promise.toLocaleLowerCase()); //{lower case}

var name = "Bangladesh";
console.log(name.indexOf('desh'));

var number1 = 24;
var number2 = '25.9';
number2 = parseFloat(number2);
console.log(number1 + number2);

var number1 = 24;
var number2 = 25.5;
number1 = ''+(number1); // string ruls
console.log(typeof number1);

var number1 = 0.2;
var number2 = 0.4;
var tolal = number1 + number2;
tolal = tolal.toFixed(3);
console.log(tolal);

var price1 = 45;
var price2 = 18;
var total = price1 * price2;
console.log(total);

var price1 = 45;
var price2 = 18;
var total = price1 / price2;
console.log(total);

var price1 = 45;
var price2 = 18;
var total = price1 - price2;
console.log(total);

var price1 = 45;
var price2 = 18;
var total = price1 % price2; // % > VAGSHES
console.log(total);

var firstName = 'Nowaj';
var lastName = 'Chowdhury';
var result = firstName + ' ' + lastName;
console.log(result);

var price = -69.01;
var result = Math.abs(price);
console.log(result);

var price = 49.49;
var result = Math.round(price);
console.log(result);

var number = Math.random()*100;
var result = Math.round(number);
console.log(result);

var number = 25.3;
var result = Math.ceil(number);
console.log(result);

var date = new Date(20/12/2011);
console.log(date)