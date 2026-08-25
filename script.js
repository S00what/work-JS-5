// first task
let bananaNum = Number(prompt('Enter numbers bananas'))
if ((bananaNum == 1) && !isNaN(bananaNum) && bananaNum) {
  alert('1 banana')
}
else if (bananaNum > 0 && !isNaN(bananaNum)) {
  alert(`${bananaNum} bananas`)
}
else {
  alert('Something went wrong')
}