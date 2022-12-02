function solution(start, finish) {
  let jamp = (finish - start) / 3;
    if (Number.isInteger(jamp)) {
        return jamp;
    } else {
        jamp = Math.round(jamp) + 1;
    }
    return jamp;
}

solution(1, 3)
