function sumOfMinimums(arr) {
    // your code here

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum +=Math.min(...arr[i])
        
    }console.log(sum);
    // console.log(Math.min(...arr[0])+Math.min(...arr[1])+Math.min(...arr[2]));
}

sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5]
]);
