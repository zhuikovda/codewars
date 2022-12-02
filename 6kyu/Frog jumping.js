function solution(a) {
    if (a.length == 0) {
        return -1;
      }
      let count = 0;
      for (let i=0; i < a.length; i+= a[i]) {   
        if ( i < 0) {
          break
        }
        count++
      if (count > 10){
        return -1;
      }
    }
    console.log(count);
  }

  solution([1, 2, 1, 5])