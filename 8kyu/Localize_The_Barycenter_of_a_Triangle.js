function barTriang(p1, p2, p3){
    //your code here
    let xO = (p1[0] + p2[0] + p3[0]) / 3,
        yO = (p1[1] + p2[1] + p3[1]) / 3;
        console.log();
        console.log([+xO.toFixed(4), +yO.toFixed(4)]);
  }

  barTriang([4, 6], [12, 4], [10, 10])