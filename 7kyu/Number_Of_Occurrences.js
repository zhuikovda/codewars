let arr = [0, 1, 2, 2, 3];

Array.prototype.numberOfOccurrences = function (a) {
    let b = 0;
    for (let i = 0; i <= this.length; i++) {
        if (this[i] === a) {
            b++;
        }
    }
    console.log(b);
};

arr.numberOfOccurrences(2);
