/*
Perfect Number Arrow function yozing. Agar son mukammal son bo‘lsa true, aks holda false. Mukammal son — o‘zidan tashqari bo‘luvchilari yig‘indisi o‘ziga teng bo‘lgan son. (Masalan: 6, 28).
input: 28
output: true
*/
let isperfect =(number)=>{
    let i = 1;
    let sum = 0
    while (i < number){
        if(number % i == 0){
            sum = sum + i
        }
        i = i + 1
    }
    if(sum == number){
        return true
    }
    else{
        return false
    }
}
let num = Number(prompt("ENTER THE NUMBER"))
alert(isperfect(num))