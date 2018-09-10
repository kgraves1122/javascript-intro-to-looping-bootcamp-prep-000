function forLoop (array) {
  for (let i = ; i < 26; i++) {
    if (i === 0) {
      array[i] = 'I am 1 strange loop.'
    } else
    array[i] = `I am ${i} strange loops.`;
  }
  
}
  
  // change 25 to 26 and i++ to ++i