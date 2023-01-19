const mango = (quantity, price) => {
    // let result =
    //     quantity <= 2
    //         ? quantity * price
    //         : quantity % 3 === 0
    //         ? (quantity / 3) * 2 * price
    //         : (((quantity - (quantity % 3)) / 3) * 2 + (quantity % 3))* price;
    // console.log(result);
    // console.log(Math.floor(quantity / 3));
    // Второй вариант
    console.log((quantity-Math.floor(quantity/3))*price);
};

mango(11, 5);
