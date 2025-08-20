/*
Integer9. Uch xonali son berilgan. 
Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.
*/
function three(num){
    let res = Math.floor(num/100)
    return res
}
let num = Number(prompt("ENTER THE THREE-DIGIT NUMBER"))
alert(three(num))