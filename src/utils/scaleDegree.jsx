export const changeScaleDegree = (scale, degree) => {
  const newScale = scale.slice()
  
  for (let i = 0; i < degree-1; i++) {
    // this will make the value of the note go up an ocatave, 
    // going to need to implement some sort of conditional
    // newScale[0]._val = newScale[0]._val * 2;
    newScale.push(newScale[0]);
    newScale.shift();
  }
  
  return newScale;
};

//select degree, 
//start from that degree,
//any notes before that degree need to go up one octave,
//push those notes to the end of the scale