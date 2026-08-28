//first task
let name;
let todayYear;
let birthYear;
do {
  name = String(prompt("Enter youre name"));
  todayYear = Number(prompt("Enter today`s year"));
  birthYear = Number(prompt('Enter birth of year'))
} while (typeof name !== "string" || !todayYear || !birthYear); // Спросил у ии как сократить IsNaN null 0 ответил так "!"
output.textContent = `Your name is ${name} your age ${todayYear - birthYear}`
