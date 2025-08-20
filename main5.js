/*
Fibonachchi ketma-ketligi Do while orqali N gacha bo‘lgan Fibonachchi sonlarini chiqarish.
input: 10
output: 0 1 1 2 3 5 8

*/
function Fibonacci(number){
    let f1 = 0;
    let f2 = 1;
    let result = []
    result = [f1,f2]
    let i = 2
    do {
        result[i] = f1 + f2
        if(result[i] > number){
            break;
        }
        f1 = f2
        f2 = result[i]
        i = i + 1
    } while ( i < number);
    return result
}
let number = Number(prompt("ENTER THE NUMBER"))
alert(Fibonacci(number))