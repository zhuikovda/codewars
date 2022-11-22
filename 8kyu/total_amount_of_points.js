function points(games) {
    let num = 0;
    for (let i = 0; i < games.length; i++)
    {
      if (games[i][0] > games[i][2])
        num += 3;
      if (games[i][0] == games[i][2])
        num += 1;
    }
    console.log(num);
  }

  points(['1:0', '3:1'])