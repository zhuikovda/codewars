function nextPal(val) {
    /* your code here */
    for (let i = val + 1;; i++) {
        let res = i + "";
        if (res.split("").reverse().join("") == res) {
            return i
        }
    }
    
    }