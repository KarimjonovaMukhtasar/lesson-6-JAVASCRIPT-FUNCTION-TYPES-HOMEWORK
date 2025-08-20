/*
✨ Nested for masalalari
Pascal uchburchagi Nested for yordamida N qatorlik Pascal uchburchagini chiqaring.
input: 5
output:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/
function pascal(n){
    let tr = []
    for (let i = 0; i <= n; i++){
        tr[i] = []
        for (let j = 0; j <= i; j++){
            if(i===j || j === 0){
                tr[i][j] = 1
            }
            else{
                tr[i][j] = tr[i-1][j-1] + tr[i-1][j]
            }
        }
    }
    return tr
}
let n = Number(prompt("ENTER THE NUMBER"))
let tr = pascal(n)
alert(tr.map(row => row.join(" ")).join("\n"));