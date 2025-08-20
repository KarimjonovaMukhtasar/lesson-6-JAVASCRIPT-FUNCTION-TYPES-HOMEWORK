/*
Tub sonlarni chiqarish N soni berilgan. While yordamida 1 dan N gacha bo‘lgan tub sonlarni ekranga chiqaring.
input: 20
output: 2 3 5 7 11 13 17 19
*/
function PrimeNumbers(limit){
    let res = []
    for (var x = 2; x < limit; x++){ 
        let i = 2
        let isPrime = true
        while(i <= x/2){
            if(x % i == 0){
                isPrime = false
                break;
            }
            i++;
        }
         if(isPrime){
            res.push(x)
        }
}
return res
}
let limit = Number(prompt("ENTER THE LIMIT"))
alert(PrimeNumbers(limit))