export const changeScaleDegree = (scale, degree) => {
  const newScale = scale.slice()
  
  for (let i = 0; i < degree-1; i++) {
    newScale.push(newScale[0]);
    newScale.shift();
  }
  
  return newScale;
};