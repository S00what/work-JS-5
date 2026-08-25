// Task 1: Age
let age = +prompt("Enter your age");
 
if (isNaN(age)) {
  alert("Что-то пошло не так");
} else if (age > 0 && age <= 18) {
  alert("Вы еще молоды, Вам нужно учиться");
} else if (age > 18 && age <= 50) {
  alert("Вам нужно работать");
} else if (age > 50 && age <= 59) {
  alert("Вам скоро на пенсию");
} else if (age > 59 && age <= 100) {
  alert("Вы пенсионер");
} else {
  alert("Что-то пошло не так");
}
 
// Task 2: Time
let time = +prompt("Enter the time");
 
function hourWord(n) {
  const n10 = n % 10;
  const n100 = n % 100;
  if (n100 >= 11 && n100 <= 14) return "часов";
  if (n10 === 1) return "час";
  if (n10 >= 2 && n10 <= 4) return "часа";
  return "часов";
}
 
if (isNaN(time) || time < 0 || time > 23) {
  alert("Isnt time");
} else {
  switch (true) {
    case time >= 0 && time <= 6:
      alert(`${time} ${hourWord(time)} ночи`);
      break;
    case time >= 7 && time <= 10:
      alert(`${time} ${hourWord(time)} утра`);
      break;
    case time >= 11 && time <= 17: {
      let h = time - 12;
      alert(`${h} ${hourWord(h)} дня`);
      break;
    }
    case time >= 18 && time <= 23: {
      let h = time - 12;
      alert(`${h} ${hourWord(h)} вечера`);
      break;
    }
  }
}
 
// Task 3: Middle number
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");
 
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Что-то пошло не так");
} else if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
  alert(`Среднее число между ${num2} и ${num3}. Это ${num1}`);
} else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
  alert(`Среднее число между ${num1} и ${num3}. Это ${num2}`);
} else if ((num3 > num1 && num3 < num2) || (num3 > num2 && num3 < num1)) {
  alert(`Среднее число между ${num1} и ${num2}. Это ${num3}`);
} else {
  alert(`Что то пошло не так`);
}