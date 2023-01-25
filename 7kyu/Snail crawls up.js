function snail(column, day, night) {
    // your code here
    return day-night==1?Math.ceil(column/day)*night: Math.ceil(column/(day-night))
    
  }