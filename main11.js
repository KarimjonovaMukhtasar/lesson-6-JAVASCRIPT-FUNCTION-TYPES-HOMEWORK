/*
Ko‘paytirish jadvali Nested for yordamida 1 dan 10 gacha ko‘paytirish jadvalini chiqarish.

2 x 1 = 2
2 x 2 = 4
...
*/
function table(){
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j<= 10; j++){
            let res = i * j
            console.log(` ${i}  *  ${j} =  ${res} `)
        }
        console.log("                      ")
    }
}
console.log(table())
