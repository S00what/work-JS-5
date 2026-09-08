let users = {}, newI = 0;
for (let i = 0; i != 10; ) {
  users[`user${i}`] = {};
  users[`user${i}`].name = String(prompt(`Enter your name (${i})`));
  let age = Number(prompt(`Enter your age (${i})`));
  users[`user${i}`].age = age;
  i++;
}
for (const key in users) {
  console.log(
    `Name is ${users[`user${newI}`].name}, age is ${users[`user${newI}`].age}, number user ${newI}`,
  );
  newI++;
}
