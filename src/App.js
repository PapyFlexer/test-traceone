import './App.css';
import Rover from'./Rover';

const size = 10;
const startPos = [0,0];
const startDir = 0;

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Mars Rover for TraceOne
      </header>
      <Rover dimensions={[size, size]} start={startPos} startDir={startDir}/>
    </div>
  );
}

export default App;
