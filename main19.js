/*
Arrow function
Raqamlarni ko‘paytmasini topish Arrow function yozing. Son beriladi, uning raqamlari ko‘paytmasini qaytarsin.
input: 234
output: 24   // 2*3*4
*/
let multiply = (number)=>{
    let res = 1
    let i = 0
    while(number > 0){
        res = res * (number % 10)
        number = Math.floor(number/10)
        i++
    }
    return res
}
let input = Number(prompt("ENTER THE ELEMENTS OF AN ARRAY WITH A SPACE"))
alert(multiply(input))