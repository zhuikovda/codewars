const gooseFilter = (birds) => {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // const resultArr = birds
    console.log(birds.filter(el=>!geese.includes(el)));
    // console.log(...birds);
   
};
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);
