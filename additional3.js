/*
Integer3. Faylning hajmi baytlarda berilgan. 
Bo'lib butunni olish operatsiyasidan foydalanib fayl hajmining to'liq 
kilobaytlarda ifodalovchi programma tuzilsin. (1Kb=1024 bayt)
*/
function kb(bite){
    let res = Math.floor(bite/1024)
    return res
}
let bite = Number(prompt("ENTER THE SIZE OF YOUR FILE ON BITES"))
alert(kb(bite))
