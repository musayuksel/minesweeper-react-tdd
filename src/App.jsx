import './App.css';
import Board from './components/Board';
import { minesweeper } from './utils/minesweeper';
function App() {

  const currentBoard =(([
    "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-",
    "X", "X", "-", "-", "-",
    "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "X", 
]));
  return (
    <div className="App">
      Hello world
      <Board currentBoard={currentBoard}/>
    </div>
  );
}

export default App;
