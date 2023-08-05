export const changeScaleDegree = (scale, degree) => {
  const newScale = scale.slice()
  console.log(newScale)
  for (let i = 0; i < degree - 1; i++) {
    // this will make the value of the note go up an ocatave,
    // going to need to implement some sort of conditional
    newScale[0]._val = newScale[0]._val * 2
    newScale.push(newScale[0])
    newScale.shift()
  }

  return newScale
}

//algorith 1
//select degree,
//start from that degree,
//any notes before that degree need to go up one octave,
//push those notes to the end of the scale
//everytime new scale degree is chosen make sure to reset the originally modified scale, otherwize it will doulble rise octave notes already moved.

//algorith 2
//select degree
//start from that degree
