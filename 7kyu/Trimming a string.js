const trim = (str, size) => {
    if (str.length <= size) {
        console.log(str);
    } else if (str.length <= 3) {
        console.log(str.slice(0, size) + "...");
    } else if (size <= 3) {
        console.log(str.slice(0, size) + "...");
    } else {
        console.log(str.slice(0, size - 3) + "...");
    }
};

trim("AUKOM ra sQDIs HkyfE", 2);
