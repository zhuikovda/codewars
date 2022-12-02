function isHappy(n) {
    for (let i = 0; i < 100; i++){
      let c = n.toString();
      let d =  c.split('');
      n = d.reduce((a,b)=>a+(b*b),0)
    }
    console.log(n == 1);
  }

  isHappy(16)