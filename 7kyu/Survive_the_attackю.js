function hasSurvived(attackers, defenders) {
    // let a = attackers.reduce((acc, curr) => acc + curr, 0)
    // let d = defenders.reduce((acc, curr) => acc + curr, 0)
    let a = 0,
        d = 0;
    for (let i = 0; i < attackers.length; i++) {
        for (let j = 0; j < defenders.length; j++)
            if (i > j ) {
                // return ;
                console.log(i);
            } else if (i < j) {
                console.log(d += j);
            }
        // console.log(a);
        // console.log(d);
    }
}

hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74])
// hasSurvived([ 65,  83, 85,  71, 45, 20], [83, 38,   80,    74])