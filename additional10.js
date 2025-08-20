/*
Integer10. Uch xonali son berilgan. 
Oldin uni birliklar xonasidagi raqamni,
so'ng o'nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.
*/
function func(num){
    alert(Math.floor(num/10)%10)
    alert(num%10)
    return "Abovementioneds are the two digits of a number"
}
let num = Number(prompt("ENTER THE THREE-DIGIT NUMBER"))
alert(func(num))