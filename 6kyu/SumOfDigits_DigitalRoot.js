function digitalRoot(n) {
    if (n < 10) {
        return n;
    }
    let num = n;
    for (let i = 0; 10 <= num; i++) {
        num = 0;
        for (let j = 0; 0 < n; j++) {
            num += n % 10;
            n = Math.floor(n / 10);
        }
        n = num
    }
    return num
  }


//   ---------------------------
// Популярное решение
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }