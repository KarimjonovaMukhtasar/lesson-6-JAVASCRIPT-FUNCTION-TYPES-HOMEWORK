/*
Integer6. Ikki xonali son berilgan. 
Oldin uning o'nliklar xonasidagi raqamni, 
so'ng birlar xonasidagi raqamni chiqaruvchi programma tuzilsin.
*/
function separate(num){
    alert(Math.floor(num/10))
    alert(num%10)
    return "ABOVEMENTIONEDS ARE THE DIGITS OF A NUMER"
}
let num = Number(prompt("ENTER THE  two-digit NUMBER"))
    alert(separate(num))