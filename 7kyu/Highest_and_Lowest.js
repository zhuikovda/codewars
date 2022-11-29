function highAndLow(numbers){
    // ...
    let num = numbers.split(' ');
    
    console.log(Math.max(...num) + ' ' + Math.min(...num));
    
    
  }

  highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");