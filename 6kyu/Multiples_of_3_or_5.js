function solution(number){
    let array = [];
      for (let i = number - 1; i >= 0; i--){
        if (i % 3 == 0){
          array.push(i);
        } else if (i % 5 == 0) {
          array.push(i);
        }
    }
    console.log([...new Set(array)].reduce((acc, curr) => acc + curr, 0)); 
  }

  solution(10, 23)