var fibonacci = [1,1]
for (let c = 0; c < 100; c++) {
    fibonacci.push(fibonacci[c]+fibonacci[c+1]) 
    console.log(fibonacci[c])
}

