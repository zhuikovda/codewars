const triangular = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i;
  }
  if (n > 0) {
    console.log(sum);
  } else {
    console.log(0);
  }
};

// no my
function triangular( n ) {
    return (n > 0) ? ((n * n) + n) / 2 : 0;
  }

triangular(-454);
