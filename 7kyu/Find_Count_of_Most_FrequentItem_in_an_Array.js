function mostFrequentItemCount(collection) {
    // Do your magic. :)
    if (collection == 0) {
        console.log(null);
    } else {
        let a = 1;
        let b = 0;
        for (let i = 0; i < collection.length; i++) {
            for (let j = i; j < collection.length; j++) {
                if (collection[i] == collection[j])  
                    b++;
                 if (a < b) {
                    a = b
                }
            }
            b = 0;
        }
        console.log(a)
    }
    
  }

  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]);