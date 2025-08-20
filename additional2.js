/*
Integer2. Og'irlik M kilogramda berilgan. 
Undagi to'liq tonnalar sonini aniqlovchi programma tuzilsin. (1t=1000kg)
*/
function tonn(M){
    let res = Math.floor(M / 1000)
    return res
}
let M = Number(prompt("ENTER THE KILOGRAMS AMOUNT"))
alert(tonn(M))
