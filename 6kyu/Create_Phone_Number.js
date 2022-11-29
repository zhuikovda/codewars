function createPhoneNumber(numbers) {
    let countryCode = numbers.slice(0, 3).join('');
    let firstNum = numbers.slice(3, 6).join('');
    let secondNum = numbers.slice(6, 10).join('');
    console.log(`(${countryCode}) ${firstNum}-${secondNum}`);
}

createPhoneNumber([5, 6, 9, 7, 6, 1, 7, 4, 3, 5])


