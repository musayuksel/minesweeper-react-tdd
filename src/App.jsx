import React from 'react';
import './App.css';
import Board from './components/Board';
import { prepareBoard } from './utils/prepareBoard';
function App() {

  const [selectedLevel, setSelectedLevel] = React.useState(0);
  const [currentBoard, setCurrentBoard] = React.useState([]);

  React.useEffect(() => {
    resetBoard();
    // eslint-disable-next-line
  }, [selectedLevel]);

  function resetBoard() {
    setCurrentBoard(prepareBoard(selectedLevel));
  }
  function handleLevelChange(width) {
    setSelectedLevel(width);
  }

  return (
    <div className="App">
      <h2>
      Welcome to Minesweeper!
      </h2>
      <section className='levelContainer'>
        <button onClick={()=>handleLevelChange(5)}>Beginner(5*5)</button>
        <button onClick={()=>handleLevelChange(10)}>Intermediate(10*10)</button>
        <button onClick={()=>handleLevelChange(20)}>Expert(20*20)</button>
        <button >Add your custom Mines</button>
      </section>
      <Board currentBoard={currentBoard} resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
