/* 
Satr uzunligini tekshirish Funksiya satr qabul qiladi. Agar uzunligi juft bo‘lsa "Juft uzunlik", toq bo‘lsa "Toq uzunlik" qaytaradi.

input: checkStringLength("hello")
output: "Toq uzunlik"
*/
function theLength(str){
    let res = str.length
    if (res % 2 == 0){
        return "JUFT UZUNLIK"
    }
    else{
        return "TOQ UZUNLIK"
    }
}
let str = prompt("ENTER THE SENTENCE")
alert(theLength(str))