/*
Integer11. Uch xonali son berilgan. 
Uning raqamlar yig'indisini aniqlovchi programma tuzilsin
*/
function sumofdigits(num){
    let sum = 0
    sum = sum + num % 10
    sum = sum + (num / 10) % 10
    sum = sum + num/100
    return parseInt(sum)
}
let num = Number(prompt("ENTER THE THREE-DIGIT NUMBER"))
alert(sumofdigits(num))