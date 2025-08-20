/*
Do while masalalari
Raqamlar yig‘indisi juft/toqligini aniqlash N soni berilgan. Raqamlar yig‘indisi juft bo‘lsa "Juft", aks holda "Toq" chiqaring.
input: 456
output: Juft  (4+5+6=15 → Toq)
*/
function defineEvenOdd(number){
        let i = 0
        sum = 0
        do {
            sum = sum + (number % 2)
            number = Math.floor(number / 10)
            i = i + 1
        } while (number > 0);
        if (sum % 2 == 0){
            return "JUFT"
        }
        else{
            return "TOQ"
        }
}
let number = Number(prompt("ENTER THE NUMBER"))
alert(defineEvenOdd(number))