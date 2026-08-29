//first task
 let name;
 let todayYear;
 let birthYear;
 do {
   name = String(prompt("Enter youre name"));
   todayYear = Number(prompt("Enter today`s year"));
   birthYear = Number(prompt("Enter birth of year"));
 } while (typeof name !== "string" || !todayYear || !birthYear); // Спросил у ии как сократить IsNaN null 0 ответил так "!"
 output.textContent = `Your name is ${name} your age ${todayYear - birthYear}`;
//second task
let userAnswer, realAnswer, userMin, userMax;

function numSymbol(min = 1, max = 4) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
function randomNum(userMin, userMax) {
  return Math.floor(Math.random() * (userMax + 1 - userMin) + userMin);
}

do {
  userMax = Number(prompt("Enter max number for the equation"));
  userMin = Number(prompt("Enter min number for the equation"));
} while (!userMax || !userMin);

do {
  let symbol = numSymbol();
  let a = randomNum(userMin, userMax);
  let b = randomNum(userMin, userMax);

  if (symbol === 1) {
    userAnswer = Number(prompt(`${a} + ${b} = ?`));
    realAnswer = a + b;
    if (realAnswer == userAnswer) {
      alert(`a + b = ${realAnswer}. You right`);
    } else {
      alert(`a + b = ${realAnswer}. You isnt right youre answer ${userAnswer}`);
    }
  } else if (symbol === 2) {
    userAnswer = Number(prompt(`${a} * ${b} = ?`));
    realAnswer = a * b;
    if (realAnswer == userAnswer) {
      alert(`a + b = ${realAnswer}. You right`);
    } else {
      alert(`a + b = ${realAnswer}. You isnt right youre answer ${userAnswer}`);
    }
  } else if (symbol === 3) {
    userAnswer = Number(prompt(`${a} / ${b} = ?`));
    realAnswer = a / b;
    if (realAnswer == userAnswer) {
      alert(`a + b = ${realAnswer}. You right`);
    } else {
      alert(`a + b = ${realAnswer}. You isnt right youre answer ${userAnswer}`);
    }
  } else if (symbol === 4) {
    userAnswer = Number(prompt(`${a} - ${b} = ?`));
    realAnswer = a - b;
    if (realAnswer == userAnswer) {
      alert(`a + b = ${realAnswer}. You right`);
    } else {
      alert(`a + b = ${realAnswer}. You isnt right. Youre answer ${userAnswer}`);
    }
  }
} while (!userAnswer);
