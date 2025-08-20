/*
Integer8. Ikki xonali son berilgan. 
Uning raqamlari o'rnini almashtirishdan hosil bo'lgan 
sonni aniqlovchi programma tuzilsin.
*/
function reversednum(num){
    let res = ""
    res = res + String(num%10)
    res = res + String(Math.floor(num/10))
    return Number(res)
}
let num = Number(prompt("ENTER THE TWO-DIGIT NUMBER"))
alert(reversednum(num))