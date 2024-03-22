INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']
OUTPUT = []

QUERY.forEach(element => {
    console.log(element)

    let temp = INPUT.filter((x) => {
        return x == element
    }).length
    OUTPUT.push(temp)
});

console.log(OUTPUT)