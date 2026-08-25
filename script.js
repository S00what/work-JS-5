//first task
let bananaNum = Number(prompt('Enter number'))

while (bananaNum -= 1) {
  if (bananaNum === 1) {
    console.log('1 banana'); 
  }
  else{
  console.log (bananaNum + " bananas")
  }
}
//second task 
var num = Number(prompt('Enter number Ill count all its even numbers and output them to the console'))
var sumEvenNum = 0

for (var i = 1; i <= num; i++) {
  if(i % 2 === 0) {
    sumEvenNum += i
  }
}
console.log(sumEvenNum);
//third task
  let numForDegree = Number(prompt('Enter number for degree'))
  let degree = Number(prompt('Enter degree for number'))

  alert(numForDegree ** degree)