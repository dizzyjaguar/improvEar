import Home from './pages/Home'

const App = () => {
  //Move everything over to using Tailwind from the current index.css
  return (
    <div className={`w-full h-screen`}>
      <Home />
    </div>
  )
}

export default App
// the mobile app version could have seperate swiped screens to change the tempo, chord, scale, or play together. So there would only be controls for 1 topic per screen
