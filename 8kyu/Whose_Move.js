// const w = 'white';
// const b = 'dlack';

function whoseMove(lastPlayer, win) {
    //coding and coding..
    
    if (lastPlayer === 'white' && win === true || lastPlayer === 'black' && win === false) {        
        console.log ('white');
    } else {        
        console.log ('black');
    }
  }

  whoseMove ('white', true);