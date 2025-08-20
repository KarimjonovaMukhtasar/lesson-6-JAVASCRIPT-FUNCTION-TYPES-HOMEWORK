/*
Integer12. Uch xonali son berilgan. 
Uning raqamlarini teskari tartibda yozishdan hosil bo'lgan 
sonni aniqlovchi program tuzilsin.
*/
function reversednum(num){
    let res = ""
    num = String(num)
    for (let i = num.length-1; i >= 0; i--){
        res = res + num[i]
    }
    return Number(res)
}
let num = Number(prompt('ENTER THE THREE DIGIT NUMBER'))
alert(reversednum(num))