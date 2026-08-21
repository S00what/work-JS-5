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

