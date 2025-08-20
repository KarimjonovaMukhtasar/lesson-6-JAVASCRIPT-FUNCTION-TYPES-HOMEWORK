/* 
Sonni ikkilangan shaklga o‘tkazish N sonini while yordamida ikkilik sanoq sistemasiga o‘tkazing.
input: 13
output: 1101
*/
function binary(number){
    let res = ""
    while(number > 0){
        res = (number % 2) + res
        number = Math.floor(number/2)
    }
    return res
}
let number = Number(prompt("ENTER THE NUMBER"))
alert(binary(number))