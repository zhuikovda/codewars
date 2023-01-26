const evenLast = (num) => {
    if (num.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < num.length; i += 2) {
        sum += num[i];
    }
    console.log(sum * num[num.length - 1]);
};

evenLast([2, 2, 2, 2.2]);
