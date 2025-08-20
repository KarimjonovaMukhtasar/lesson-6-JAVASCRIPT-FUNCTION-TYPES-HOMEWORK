/*
Integer7. Ikki xonali son berilgan. 
Uning raqamlari yig'indisini aniqlovchi programma tuzilsin.
*/
function sumofDigits(num){
    let sum = 0
    sum = sum + (num % 10)
    sum = sum + Math.floor(num/10)
    return sum
}
let num = Number(prompt("ENTER THE two-digit NUMBER"))
alert(sumofDigits(num))