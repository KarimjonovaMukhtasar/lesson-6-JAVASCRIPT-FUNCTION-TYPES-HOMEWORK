/*
Expression function
Parolni tekshirish Funksiya expression sifatida yozilsin. Parol kamida 8 belgidan iborat bo‘lsa "Yaroqli parol", aks holda "Yaroqsiz parol".
input: "abcd1234"
output: "Yaroqli parol"
*/
let res = function (password){
    if(password.length >= 8){
        if(/^[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password)){
        return "YAROQLI PAROL"
    }
}
    else{
        return "YAROQSIZ PAROL"
    }
}
let password = prompt("ENTER THE PASSWORD")
alert(res(password))
