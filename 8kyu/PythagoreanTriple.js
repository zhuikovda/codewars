function isPythagoreanTriple(integers) {
    // Good luck friends!
    if (Math.pow(integers[0], 2) + Math.pow(integers[1], 2) == Math.pow(integers[2], 2) ||
        Math.pow(integers[0], 2) + Math.pow(integers[2], 2) == Math.pow(integers[1], 2) ||
        Math.pow(integers[1], 2) + Math.pow(integers[2], 2) == Math.pow(integers[0], 2)) {
            console.log(true);
        } else {
            console.log(false);
        }
  }

  isPythagoreanTriple([3, 5, 9])