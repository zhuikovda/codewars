function findWaldo(crowd) {
    let w = "";
    let arr = [];
    for (let i = 0; i < crowd.length; i++) {
        for (let j = 0; j < crowd[i].length; j++) {
            arr.push(crowd[i][j]);
        }
    }
    arr.sort();
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
            w = arr[i];
        } 
    }
  for (let i = 0; i < crowd.length; i++) {
    for (let j = 0; j < crowd[i].length; j++) {
      if (crowd[i][j] == w) {
        return [i, j]
      }
    }
  }
} 