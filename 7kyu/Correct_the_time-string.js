const timeCorrect = (timestring) => {
    let hour = Number.parseInt(timestring.split("").slice(0, 2).join("")),
        min = Number.parseInt(timestring.split("").slice(3, 5).join("")),
        sec = Number.parseInt(timestring.split("").slice(6).join(""));
    if (timestring == null) {
        console.log(null)
    } else if (timestring === "") {
        console.log("")
    } else if (timestring !== `" ":" ":" "`) {
        console.log(null)
    } else {
        console.log(`0${hour}:${min}:0${sec}`);
    }

    //
}

timeCorrect("09:10:01");