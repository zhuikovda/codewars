const howMuchILoveYou = (nbPetals) => {
    const attLove = ["not at all", "I love you", "a little", "a lot", "passionately", "madly" ];

    // if (nbPetals > attLove.length - 1) {

    // }
    // console.log(attLove[Math.floor(nbPetals/5-1)]);
    console.log(
         attLove[(nbPetals % attLove.length)]
    );
    // console.log(nbPetals % attLove.length);
};

howMuchILoveYou(7);
