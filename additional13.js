/*
Integer13. Uch xonali son berilgan. //123
Uning chapdan birinchi raqamini o'chirib //23
o'ng tarafiga yozishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.//231
*/
function change(num){
    let first = Math.floor(num/100)
    num = num - (Math.floor(num/100) * 100)
    num = String(num) + String(first)
    return Number(num)
}
let num = Number(prompt("Enter the three - digit number"))
alert(change(num))