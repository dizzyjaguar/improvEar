import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
// the mobile app version could have seperate swiped screens to change the tempo, chord, scale, or play together. So there would only be controls for 1 topic per screen