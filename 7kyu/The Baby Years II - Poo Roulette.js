const pooRoulette = (p) => {
    for (let i = 0; i < p.length; i++) {
        if (p[i].includes("B")) {
            if (
                p[i][p[i].indexOf("B") + 1] === "~" &&
                p[i][p[i].indexOf("B") + 2] === "~" &&
                p[i][p[i].indexOf("B") + 3] === "~"
            ) {
                return "You disgust me!";
            }
            if (
                p[i][p[i].indexOf("B") - 1] === "~" &&
                p[i][p[i].indexOf("B") - 2] === "~" &&
                p[i][p[i].indexOf("B") - 3] === "~"
            ) {
                return "You disgust me!";
            }
            if (p[i - 1] && p[i - 2] && p[i - 3]) {
                if (
                    p[i - 1][p[i].indexOf("B")] === "~" &&
                    p[i - 2][p[i].indexOf("B")] === "~" &&
                    p[i - 3][p[i].indexOf("B")] === "~"
                ) {
                    return "Get the wipes!";
                }
            }
        }
    }
    return "Calm before the storm";
};

pooRoulette([
    ["o", "o", "o", "o", "o", "o", "o"],
    ["o", "~", "o", "o", "o", "o", "o"],
    ["o", "~", "o", "o", "o", "o", "o"],
    ["o", "~", "o", "o", "o", "o", "o"],
    ["o", "B", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o"]
]);
