function aliasGen(a, b) {
    let f = a[0].toUpperCase();
    let s = b[0].toUpperCase();
    var firstName = { A: "Alpha", B: "Beta", C: "Cache" };
    var surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };
    if (!Number(f) && !Number(s)) {
        console.log(firstName[f] + " " + surname[s]);
    } else {
        console.log("Your name must start with a letter from A - Z.");
    }
    // console.log(typeof Number(s[0])); 
    // console.log( f);
}

aliasGen("721", "Bob");
