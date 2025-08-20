/*
Uchburchak shakli Nested for yordamida N ta satr bo‘yicha yulduzlardan uchburchak chizish.
input: 5
output:
*
**
***
****
*****
*/
function triangular(n){
    let tr = []
    for (let i = 0; i <= n; i++){
        tr[i] = []
        for (let j = 0; j <= i; j++){
            tr[i][j] = "*"
        }
    }
    return tr
}
let n = Number(prompt("ENTER THE NUMBER"))
let tr = triangular(n)
alert(tr.map(row => row.join(" ")).join("\n"));