function forLoop (array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array = array.push(`I am ${i} strange loop.`);
    } else
    { array = array.push(`I am ${i} strange loops.`);}
  }
  return array;
}
  
  