const digPow = (n, p) => {
  const res = n.toString();
  let pow = p;
  let sum = 0;
  for (let i = 0; i < res.length; i++) {
    pow = p + i;
    sum += Math.pow(res[i], pow);
  }
  if (Number.isInteger(sum / n) && sum / n > 0) {
    let k = sum / n;
    console.log(k);
  } else {
    console.log(-1);
  }
};

digPow(695, 2);
