// first task
let age = +prompt("Enter your age");
if (age < 18 && !isNaN(age)) {
  alert("Youre still young, you need to study");
} else if (age <= 50 && !isNaN(age)) {
  alert("You need to work");
} else if (age <= 59 && !isNaN(age)) {
  alert("Youre about to retire");
} else if (age === 59 && !isNaN(age)) {
  alert("Youre in retire");
} else if (isNaN(age)) {
  alert("Isnt age");
} else {
  alert("You alive?!");
}
// second task
let time = +prompt("Enter the time");
if (isNaN(time) || time < 0 || time > 23) {
  alert("Isnt time");
} else if (time < 6) {
  alert(`${time} a.m.`);
} else if (time <= 10) {
  alert(`${time} am`);
} else if (time <= 17) {
  alert(`${time} pm`);
} else {
  alert(`${time} pm`);
}
//third task
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");

if (num1 > num2 && num1 < num3) {
  alert(`Среднее число между ${num2} и ${num3}. Это ${num1}`);
} else if (num1 > num3 && num1 < num2) {
  alert(`Среднее число между ${num2} и ${num3}. Это ${num1}`);
} else if (num2 > num3 && num2 < num1) {
  alert(`Среднее число между ${num1} и ${num3}. Это ${num2}`);
} else if (num2 > num1 && num2 < num3) {
  alert(`Среднее число между ${num1} и ${num3}. Это ${num2}`);
} else if (num3 > num2 && num3 < num1) {
  alert(`Среднее число между ${num2} и ${num1}. Это ${num3}`);
} else if (num3 > num1 && num3 < num2) {
  alert(`Среднее число между ${num2} и ${num1}. Это ${num3}`);
} else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Все три числа должны быть числом");
} else {
  alert("Something went wrong");
}