const repeatStr = (a, y) => {
    let str = "";
    for (let i = 0; i < a; i++) {
        str += y;
    }
    console.log(str);
};

repeatStr(3, "*");
