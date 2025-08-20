/*
Sonni raqamlari yig‘indisi bo‘yicha baholash Funksiya son qabul qiladi. Agar raqamlar yig‘indisi 10 dan kichik bo‘lsa "kichik", 10–20 oralig‘ida bo‘lsa "o‘rtacha", 20 dan katta bo‘lsa "katta".
input: checkDigitSum(583)
output: "o'rtacha"

*/
function checkDigitSum(number){
    let sum = 0
    let i = 0
    while(number > 0){
    let last = number % 10
    sum = sum + last
    number = Math.floor(number / 10)
    }
    if (sum <= 10){
        return "KICHIK"
    }
    else if(sum > 10 && sum < 20){
        return "O'RTACHA"
    }
    else if(sum > 20){
        return "KATTA"
    }
}
let num = Number(prompt("ENTER THE NUMBER"))
alert(checkDigitSum(num))