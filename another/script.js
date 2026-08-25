let secretNum = 15
let answerNum;
for (let i = 0; i < 5; i++) {
    answerNum = Number(prompt('I thought of a number frm 0 to 20, yu have 5 tries,guess it.'))
    if (secretNum === answerNum) {
        alert('You guessed it, congratulations')
        break
    }
    else {
        alert(`Didnt guess correctly, attempts used: ${i}`)
    }
}