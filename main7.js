/*
 For masalalari
Armstrong sonlarini topish 1 dan N gacha bo‘lgan Armstrong sonlarni for orqali toping. (Armstrong son — raqamlarining kubi yig‘indisi o‘ziga teng, masalan: 153 = 1³+5³+3³).
input: 500
output: 153, 370, 371, 407
*/
function armstrong(number){
    let result = []
    let num = number
    for (let i = 1; i < number; i++){
        let sum = 0
        let x = i
        while (x > 0){
            let last = x % 10
            sum = sum + last ** 3
            x = Math.floor(x / 10)
        } ;
        if(sum === i){
            result.push(i)
        }
    }
    return result
}
let number = Number(prompt("ENTER THE LIMIT NUMBER"))
alert(armstrong(number))