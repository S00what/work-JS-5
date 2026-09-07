let users = {};
let i = 0;
do {
  users[`user${i}`] = {};
  users[`user${i}`].name = String(prompt(`Enter your name (${i})`));
  let age = Number(prompt(`Enter your age (${i})`));
  while (isNaN(age)) {
    age = Number(prompt(`Введите число (${i})`));
  }
  users[`user${i}`].age = age;
  console.log(
    `Name is ${users[`user${i}`].name}, age is ${users[`user${i}`].age}, number user ${i}`,
  );
  i++;
} while (i != 10);
console.log(users);
//Прошу простить использование do while скоро исправлюсь и придумаю как его не использовать
