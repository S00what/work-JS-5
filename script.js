// //first task
let name, todayYear, birthYear;
for (;typeof name !== "string" || !todayYear || !birthYear;) {
  name = String(prompt("Enter youre name"));
  todayYear = Number(prompt("Enter today`s year"));
  birthYear = Number(prompt("Enter birth of year"));
} // Спросил у ии как сократить IsNaN null 0 ответил так "!"
output.textContent = `Your name is ${name} your age ${todayYear - birthYear}`;
//second task
let userAnswer, sysAnswer, userMin, userMax, a, b;

function numSymbol(min = 1, max = 4) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
function randomNum(userMin, userMax) {
  return Math.floor(Math.random() * (userMax + 1 - userMin) + userMin);
}
userMin = Number(prompt("Enter min value"));
userMax = Number(prompt("Enter max value"));
do {
  a = randomNum(userMax, userMin);
  b = randomNum(userMax, userMin);
  equa = numSymbol();
  if (equa == 1) {
    sysAnswer = a + b;
    userAnswer = Number(prompt(`${a} + ${b} = ?`));
    if (sysAnswer == userAnswer && !userAnswer) {
      alert(`${a} + ${b} = ${sysAnswer} your right`);
    } else {
      alert(`${a} + ${b} = ${sysAnswer} your isnt right (${userAnswer})`);
    }
  } else if (equa == 2) {
    sysAnswer = a - b;
    userAnswer = Number(prompt(`${a} - ${b} = ?`));
    if (sysAnswer == userAnswer && !userAnswer) {
      alert(`${a} - ${b} = ${sysAnswer} your right`);
    } else {
      alert(`${a} - ${b} = ${sysAnswer} your isnt right (${userAnswer})`);
    }
  } else if (equa == 3) {
    sysAnswer = a / b;
    userAnswer = Number(prompt(`${a} / ${b} = ?`));
    if (sysAnswer == userAnswer && !userAnswer) {
      alert(`${a} / ${b} = ${sysAnswer} your right`);
    } else {
      alert(`${a} / ${b} = ${sysAnswer} your isnt right (${userAnswer})`);
    }
  } else if (equa == 4) {
    sysAnswer = a * b;
    userAnswer = Number(prompt(`${a} * ${b} = ?`));
    if (sysAnswer == userAnswer && !userAnswer) {
      alert(`${a} * ${b} = ${sysAnswer} your right`);
    } else {
      alert(`${a} * ${b} = ${sysAnswer} your isnt right (${userAnswer})`);
    }
  }
} while (!userAnswer); //ПРишлось использовать do while из за построчного читаемого кода ведь userAnswer должен быть в цикле а если использовать for то он читается первым и userAnswer является undefined(не знаю как это исправить)
