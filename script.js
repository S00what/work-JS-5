let users = {};
let i = 0;
do {
  users[`user${i}`] = {};
  users[`user${i}`].name = String(prompt(`Enter your name (${i})`));
  users[`user${i}`].age = Number(prompt(`Enter your age (${i})`));
  for (const key in users) {
    console.log(
      `Name is ${users[`user${i}`].name}, age is ${users[`user${i}`].age}, number user ${i}`,
    );
  }
} while (
  !users[`user${i}`].age ||
  typeof users[`user${i}`].name !== "string" ||
  i++ != 9
);
console.log(users);

//Прошу простить использование do while скоро исправлюсь и придумаю как его не использовать
