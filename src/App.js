import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import video from './assets/videos/TheGoodDoctor.mp4';
function App() {
  return (
    <div className="contenedor">
      <ReactPlayer
      url={'https://www.youtube.com/watch?v=1wEsPDWcRlk'}
      width='100%'
      height='100%'
      controls
      loop
      className="react-player"
      />
    </div>
  );
}
export default App;


