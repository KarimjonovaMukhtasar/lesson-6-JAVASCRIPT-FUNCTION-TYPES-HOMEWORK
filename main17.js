/*
Palindrom son Expression function yozing. Agar son teskari yozilganda ham o‘sha son bo‘lsa true, aks holda false.
input: 121
output: true
input: 123
output: false
*/
let isPolindrome = function(number){
    let num = String(number)
    let res = ""
    for(let i = num.length-1; i>=0; i--){
            res = res + num[i]
        }
        if(res === String(number)){
            return true
        }
        else{
            return false
        }
    }
let number = Number(prompt("ENTER THE NUMBER"))
alert(isPolindrome(number))