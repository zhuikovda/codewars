String.prototype.toAlternatingCase = function () {
    if (this.toUpperCase()) {
        console.log(this.toLowerCase());
    } else {
        console.log(this.toUpperCase());
    }
    // Define your method here :)
  };

 'dima'.toAlternatingCase();