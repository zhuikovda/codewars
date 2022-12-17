// function humanYearsCatYearsDogYears(humanYears) {
//     // Your code here!
//     let catYers = 0,
//         dogYers = 0;
//     if (humanYears == 1 && Number.isInteger(humanYears)) {
//         console.log([humanYears, catYers = 15, dogYers = 15])
//     } else if (humanYears == 2 && Number.isInteger(humanYears)) {
//         console.log([humanYears, catYers = 24, dogYers = 24])
//     } else if (humanYears > 2 && Number.isInteger(humanYears)) {
//         console.log([humanYears, catYers = 24 + ((humanYears - 2) * 4), dogYers = 24+(humanYears - 2) * 5])
//     }
//
// }

//Стрелочный вариант
let humanYearsCatYearsDogYears = (humanYears) => {
    // Your code here!
    let catYers = 0,
        dogYers = 0;
    if (humanYears == 1 && Number.isInteger(humanYears)) {
        console.log([humanYears, catYers = 15, dogYers = 15])
    } else if (humanYears == 2 && Number.isInteger(humanYears)) {
        console.log([humanYears, catYers = 24, dogYers = 24])
    } else if (humanYears > 2 && Number.isInteger(humanYears)) {
        console.log([humanYears, catYers = 24 + ((humanYears - 2) * 4), dogYers = 24 + (humanYears - 2) * 5])
    }

}

humanYearsCatYearsDogYears(10)

