import React, { useEffect, useRef, useState } from 'react';
import * as Tone from "tone";
import { Button, FormSelect } from 'react-bootstrap';
import { keyCenters } from '../data/chords';
import { scaleTypes } from '../data/scales';
import { changeScaleDegree } from '../utils/scaleDegree';



const Scale = ({ pianoSampler, selectedScale, scaleType, startingNote, setKeyCenter, setScaleType, handleScaleOctave, keyCenter, octave }) => {
  const scaleEvent = useRef();
  
  
  useEffect(() => {
    scaleEvent.current = new Tone.Sequence((time, note) => {
      pianoSampler.triggerAttackRelease(note, 0.1, time, 2.5);
    }, selectedScale).start(0)
  }, []);
  
  useEffect(() => {
    scaleEvent.current.dispose();
    scaleEvent.current = new Tone.Sequence((time, note) => {
      pianoSampler.triggerAttackRelease(note, 0.1, time, 2.5);
    }, selectedScale).start(0)
  }, [scaleType, startingNote])
  
  //COULD JUST HAVE A MUTE BUTTON FOR THE CHORD IF ALL ELSE FAILS
  // this is still playing at the same time, either write out a bunch of triggerAttackRelease or need to find another way via sequence or pattern but doesnt go to the Transport.
  const playScale = () => {
    const mappedScale = selectedScale.map(note => note._val)
    // console.log(mappedScale)
    // this way works, but would not work in real production
    pianoSampler.triggerAttackRelease(mappedScale[0], '16n', Tone.now(), 2.5)
    pianoSampler.triggerAttackRelease(mappedScale[1], '16n', Tone.now() + .3, 2.5)
    pianoSampler.triggerAttackRelease(mappedScale[2], '16n', Tone.now() + .6, 2.5)
    pianoSampler.triggerAttackRelease(mappedScale[3], '16n', Tone.now() + .9, 2.5)
    pianoSampler.triggerAttackRelease(mappedScale[4], '16n', Tone.now() + 1.2, 2.5)
    pianoSampler.triggerAttackRelease(mappedScale[5], '16n', Tone.now() + 1.5, 2.5)
    pianoSampler.triggerAttackRelease(mappedScale[6], '16n', Tone.now() + 1.8, 2.5)
    
    
    
    // for (let i = 0; i < mappedScale.length; i++ ) {
      //   let startTime = 0
      //   pianoSampler.triggerAttackRelease(mappedScale[i], '8n', Tone.now() + startTime, 2.5)
      //   startTime += .5;
      // }
    };
    
    
    const keyNodes = keyCenters.map(key => {
      return <option key={key.name} value={key.value}>{key.name}</option>
    })
    
    const scaleNodes = Object.keys(scaleTypes).map(chord => {
      return <option key={chord} value={chord}>{chord}</option>
    })
    
    const handleKeyChange = (event) => {
      const { target } = event;
      const { value } = target;
      event.persist();
      
      setKeyCenter(value);
    };
    
    const handleScaleTypeChange = (event) => {
      const { target } = event;
      const { value } = target;
      event.persist();
      
      setScaleType(scaleTypes[value]);
    };
    
  //   const degreeNodes = selectedScale.map((note, index) => {
  //     return <option key={note} value={index+1}>{index + 1}</option>
  //   });
    
  //   const scaleDegree = useRef(1)

  //   const handleDegreeChange = (event) => {
  //     const { target } = event;
  //     const { value } = target;
  //     event.persist();
      
  //     scaleEvent.current.dispose();
  //     scaleEvent.current = new Tone.Sequence((time, note) => {
  //       pianoSampler.triggerAttackRelease(note, 0.1, time, 2.5);
  //   }, changeScaleDegree(selectedScale, value)).start(0)  
  // };

  // console.log(scaleDegree.current)
  
  // console.log(selectedScale)
  
  return (
    <>
      <h3 className="component-titles">Scale</h3>
      <span>Octave</span>
      <Button variant="outline-primary" onClick={() => handleScaleOctave('up')}>Up</Button>
      <Button variant="outline-primary" onClick={() => handleScaleOctave('down')}>Down</Button>
      <FormSelect id="keys" className="KeySelect" name="keys" onChange={(handleKeyChange)}>
        {keyNodes}
      </FormSelect>
      <FormSelect id="chords" name="chords" onChange={(handleScaleTypeChange)}>
        {scaleNodes}
      </FormSelect>
      <Button variant="outline-primary" className="note" onClick={() => playScale()}>
        PlayScale
      </Button>
      <br/>
      {/* <h4>Start from scale degree</h4>
      <select id="degrees" name="degrees" ref={scaleDegree} defaultValue={1} onChange={(handleDegreeChange)}>
        {degreeNodes}
      </select> */}
    </>
  )
}

export default Scale;