/*
Integer15. Uch xonali son berilgan. Uning o'nliklar xonasidagi raqam bilan 
yuzliklar xonasidagi raqamni
almashtirishdan hosil bo'lgan 
sonni aniqlovchi programma tuzilsin. (Kirish=123, Natija=213)
*/
function change(num){
    let uniques = num % 10
    let tens = Math.floor(num/10)%10
    let hundreds = Math.floor(num/100)
    let result = tens * 100 + uniques * 10 + hundreds
    return result
}
let num = Number(prompt("ENTER THE THREE-DIGIT NUMBER"))
alert(change(num))