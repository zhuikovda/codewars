function isValidWalk(walk) {
    let n=[],
        s=[],
        e=[],
        w=[];
    walk.map ( a => {
    if (a ==='n') {
      n.push(1);
      } else if (a ==='s') {
        s.push(1);
      } else if (a ==='e') {
        e.push(1);
      } else if (a ==='w'){
        w.push(1);
      } 
  })
     console.log( (n.length === s.length) && (w.length===e.length) && (walk.length === 10))
  }

  isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
  