export const chords = {
  cmaj7: ['C4', 'E4', 'G4', 'B4'],
  cmin7: ['C4', 'Eb4', 'G4', 'Bb4'],
  dmin7: ['D4', 'F4', 'A4', 'C5'],
}
// this possibly might be the better way to start structuring the data and then just transpose per key via Tone.js
export const chordTypes = {
  major: ['C4', 'E4', 'G4'],
  minor: ['C4', 'Eb4', 'G4'],
  major6: ['C4', 'E4', 'G4', 'A4'],
  minor6: ['C4', 'Eb4', 'G4', 'A4'],
  diminished: ['C4', 'Eb4', 'Gb4', 'A4'],
  augmented: ['C4', 'E4', 'G#4', 'C5'],
  major7: ['C4', 'E4', 'G4', 'B4'],
  minor7: ['C4', 'Eb4', 'G4', 'Bb4'],
  minor7flat5: ['C4', 'Eb4', 'Gb4', 'Bb4'],
  dominant7: ['C4', 'E4', 'G4', 'Bb4'],
  dominant7flat5: ['C4', 'E4', 'Gb4', 'Bb4'],
  dominant7sharp5: ['C4', 'E4', 'G#4', 'Bb4']

}
