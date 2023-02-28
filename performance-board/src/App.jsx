import './App.css';
import Board from './components/Board';
import logo from './assets/AVGE_logo_zoom.png';

const App = () => {

  return (
    <div className="App">
      <img src={logo} width='200'/>
      <h1>AVGE Concert Recordings</h1>
      <a href="https://www.youtube.com/@brownavge">
        <button className="button">Youtube</button>
      </a>
      <a href="https://www.instagram.com/brownavge">
        <button className="button">Instagram</button>
      </a>
      <a href="https://www.facebook.com/brownavge">
        <button className="button">Facebook</button>
      </a>
      <Board />
    </div>
  )
}

export default App;