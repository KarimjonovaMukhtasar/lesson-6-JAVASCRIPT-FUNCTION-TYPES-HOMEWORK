/*
Declaration function (oddiydan murakkabga)
Eng katta uch sonni topish Funksiya uchta son qabul qiladi va ulardan eng kattasini qaytaradi.
input: findMaxOfThree(12, 45, 30)
output: 45
*/
function theMax(a,b,c){
    let res = Math.max(a,b,c)
    return res
}
let input = prompt("ENTER THREE NUMBERS WITH A SPACE")
let [a,b,c] = input.split(" ").map(item => Number(item.trim()))
alert(theMax(a,b,c))