/*
Kvadrat sonlar For yordamida 1 dan N gacha bo‘lgan mukammal kvadrat sonlarni chiqaring.

input: 30
output: 1 4 9 16 25
*/
function mukammalKvadrat(number){
    let result = []
    for (let i = 1; i < number; i++){
        if(i * i > number){
            break;
        }
        result.push(i*i)
    }
    return result
}
let number = Number(prompt("ENTER THE LIMIT NUMBER"))
alert(mukammalKvadrat(number))