function getCount(str) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.split('');
    strArr.forEach((element) => {
        for (let i = 0; i <= vowels.length; i++) {
            if (element === vowels[i]) {
                count++;
            }
        }
    })
    console.log(count);
  }

  getCount('ud')