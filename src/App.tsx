import './index.css'
import Home from './pages/Home'

const App = () => {
  //Move everything over to using Tailwind from the current index.css
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
// the mobile app version could have seperate swiped screens to change the tempo, chord, scale, or play together. So there would only be controls for 1 topic per screen
