/*
Eng uzun so‘z Arrow function yozing. Satr qabul qiladi va ichidagi eng uzun so‘zni qaytaradi.
input: "Men JavaScriptni o‘rganayapman"
output: "JavaScriptni"
*/
let theMostLengthy = (str) => {
    arr = str.split(" ").map(item=> item.trim())
    let lengthy = ""
    for (let key of arr){
        if(key.length > lengthy.length){
            lengthy = key
        }
    }
    return lengthy
}
let str = prompt("ENTER THE SENTENCE")
alert(theMostLengthy(str))