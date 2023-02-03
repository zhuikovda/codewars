function datingRange(age) {
    //return min-max
    if (15 <= age && age <= 100) {
        let minAge = Math.floor(age / 2 + 7);
        let maxAge = Math.floor((age - 7) * 2);
        console.log(`${minAge}-${maxAge}`);
    } else {
        let minA = Math.floor(age - 0.1 * age);
        let maxA = Math.floor(age + 0.1 * age);
        console.log(`${minA}-${maxA}`);
    }
    // console.log(Math.round(12.48));
}

datingRange(8);
