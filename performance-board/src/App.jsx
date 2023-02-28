import './App.css';
import Board from './components/Board';
import logo from './assets/AVGE_logo_zoom.png';

const App = () => {

  return (
    <div className="App">
      <img src={logo} width='200'/>
      <h1>AVGE Concert Recordings</h1>
      <Board />
    </div>
  )
}

export default App;