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

