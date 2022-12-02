function fibonacci(max) {
    let f = [0, 1]
    for (let i = 1; f[i - 1] + f[i] < max; i++){
      f.push(f[i - 1] + f[i]);
    }
    console.log(f.reduce((acc, curr) => acc + (curr % 2 == 0 ? curr : 0), 0))
}

fibonacci(2147483647)