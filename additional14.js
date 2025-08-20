/*
Integer14. Uch xonali son berilgan. //123
Uning o'ngdan birinchi raqamini o'chirib //12
chap tarafiga yozishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin. //312
*/
function change(num){
    let last = num % 10
    num = Math.floor(num/10)
    num = last * 100 + num
    return num
}
let num = Number(prompt("Enter the three-digit number"))
alert(change(num))