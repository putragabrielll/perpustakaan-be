const sentence = "Saya sangat senang mengerjakan soal algoritma"

const split = sentence.split(" ")
console.log(split)


let temp = 0 // 11
// 9 > 11


// for (let i = 0; i < split.length; i++) {
//     if (split[i].length > temp) {
//         temp=split[i].length
//     }  
// }
// console.log(temp + " character")


split.forEach((v) => {
    console.log(v)
    if (v.length > temp) {
        temp=v.length
    }
})
console.log(temp + " character")