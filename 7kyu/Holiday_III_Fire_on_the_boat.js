const fireFight = (s) => {
    let arrWords = s.split(' ');
    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i] === 'Fire') {
            arrWords[i] = '~~';
        }
    }
    console.log(arrWords.join(' '));
};

fireFight(
    'Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast'
);
