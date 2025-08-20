/*
Integer5. A va B (A > B) musbat sonlar berilgan. A kesmada B kesmani necha marta joylashtirish mumkin.
 A kesmada B kesmaning joylashmagan qismini aniqlovchi programma tuzilsin.
*/
const res = function(a,b){
    let result = Math.floor(a/b)
    let remainder = a - result * b
    return remainder
}
let input = prompt("ENTER THE NUMBERS OF A AND B")
let [a,b] = input.split(" ").map(item => Number(item.trim()))
alert(res(a,b))
