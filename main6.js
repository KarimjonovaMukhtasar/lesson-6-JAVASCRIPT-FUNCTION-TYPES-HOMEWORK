/*
Raqamlar sonini hisoblash N soni berilgan. Do while orqali raqamlar sonini toping.
input: 987654
output: 6
*/
function countDigits(number){
    let sum = 0
    do {
        let last = number % 10
        sum = sum + 1
        number = Math.floor(number / 10)
    } while (number > 0);
    return sum
}
let number = Number(prompt("ENTER THE NUMBER"))
alert(countDigits(number))