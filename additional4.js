/*
Integer4. A va B (A > B) musbat sonlari berilgan. 
A kesmada, B kesmani necha marta joylashtirish mumkinligini aniqlovchi 
programma tuzilsin.
*/
function howmany(a,b){
    let res = Math.floor(a/b)
    return res
}
let input = prompt("ENTER THE NUMBERS OF A AND B>>> (A>B")
let [a,b] = input.split(" ").map(item=> item.trim())
alert(howmany(a,b))