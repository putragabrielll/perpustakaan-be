matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

// diagonal pertama = 1 + 5 + 9 = 15 
// diagonal kedua = 0 + 5 + 7 = 12 

// maka hasilnya adalah 15 - 12 = 3

let d1 = 0
let d2 = 0

matrix.forEach((e, i) => {
    let length = e.length - 1
    d1 += e[i]
    d2 += e[length - i]

    console.log(length - i)
});
console.log(d1)
console.log(d2)