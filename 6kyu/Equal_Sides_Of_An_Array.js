function findEvenIndex(arr) {
    let l = 0;
    let r = arr.reduce((acc, curr) => acc + curr, 0);
    for (let i = 0; i < arr.length; i++) {
      r -= arr[i];
      if (l == r) {
        console.log(i);      
      }
      l += arr[i];
    }
//    console.log(-1);
  }

  findEvenIndex([1,2,3,4,3,2,1])