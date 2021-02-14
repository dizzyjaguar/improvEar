import React from 'react';
import Chord from '../components/Chord';
import Scale from '../components/Scale';


const Home = () => {

  return (
    <>
      {/* add a button to play both the scale and chord at the same time */}
        <Chord />
        <Scale />
      
    </>
  )
}

export default Home;