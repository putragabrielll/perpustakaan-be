var temp = "NEGIE1"

var temp1 = temp.split("")
console.log(temp1)

var l = '' // E
var x = '' // 1
for (i = temp1.length - 1; i >= 0 ; i--){
    if (isNaN(temp1[i])) {
        l += temp1[i]
    } else {
        x += temp1[i]
    }
}

console.log(l)
console.log(x)
console.log(l+x)