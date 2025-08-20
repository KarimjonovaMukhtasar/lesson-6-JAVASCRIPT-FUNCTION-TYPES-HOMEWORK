/*
Sonlarning o‘rtacha qiymatini hisoblash Expression function massiv qabul qiladi va o‘rtachasini qaytaradi.
input: [10, 20, 30, 40]
output: 25
*/
let average = function (arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    let avg = sum/arr.length
    return avg
}
let input = prompt("ENTER THE ELEMENTS OF ARRAY WITH SPACE")
let arr = input.split(" ").map(item=> Number(item.trim()))
alert(average(arr))
