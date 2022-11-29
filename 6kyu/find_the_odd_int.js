function findOdd(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
      obj[A[i]] = (obj[A[i]] || 0) + 1;
    }
    for (let j in obj) {
      if (obj[j] % 2 !== 0) {
        console.log(Number(j));
      }
    }
  }


  findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])