/*
Integer1. Uzunlik L santimetrda berilgan. 
Undagi to'liq metrlar sonini aniqlovchi programma tuzilsin. (1m=100cm)
*/
function metr(sm){
    let res = Math.floor(sm / 100)
    return res
}
let sm = Number(prompt("Enter the length in centimetres"))
alert(metr(sm))