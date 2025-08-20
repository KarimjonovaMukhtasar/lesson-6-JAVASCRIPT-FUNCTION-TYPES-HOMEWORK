/*
While masalalari
Eng katta raqamni topish N soni berilgan. While yordamida uning eng katta raqamini toping.
input: 38527
output: 8
*/
function the_biggest(num){
    let i = 0
    let max = 0
    while(i < num){
        res = num % 10
        if (res > max){
            max = res
        }
        num = num/10
        i = i + 1
    }
    return parseInt(max)
}
let number = Number(prompt("ENTER THE NUMBER"))
alert(the_biggest(number))