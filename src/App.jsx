import React from 'react';
import './App.css';
import Board from './components/Board';
import { prepareBoard } from './utils/prepareBoard';
import {minesweeper} from './utils/minesweeper';
function App() {

  const [selectedLevel, setSelectedLevel] = React.useState(5);
  const [currentBoard, setCurrentBoard] = React.useState([]);
  const [customBoard, setCustomBoard]=React.useState('');
  const [isCustomBoard, setIsCustomBoard]=React.useState(false);
  React.useEffect(() => {
    resetBoard();
    // eslint-disable-next-line
  }, [selectedLevel]);

  function resetBoard() {
    setCurrentBoard(prepareBoard(selectedLevel));
  }

  function handleLevelChange(width) {
    resetBoard();
    isCustomBoard && setIsCustomBoard(false);
    setSelectedLevel(width);
  }

  function handlePlayClick() {
    const customBoardArray=customBoard.split('').filter((item)=>item==='X' || item==='-');
    if(customBoardArray.length <2 || Math.sqrt(customBoardArray.length)!== Math.floor(Math.sqrt(customBoardArray.length))){
      alert('Please enter a valid board!!! \nIt should be a square!!!');
      return;
    }
    setCurrentBoard(minesweeper(customBoardArray));
    setIsCustomBoard(false);
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
        <button  onClick={()=>setIsCustomBoard(true)}>Add your custom Mines</button>
      </section>
      { isCustomBoard ?
      <section className='customMinesweeperContainer'>
      <h1>Custom Minesweeper</h1>
      <p>Please paste your array of mines!!!</p>
      <textarea
      placeholder='Example : [X,X,-,-,-,X,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-]'
        style={{width:'500px',height:'100px'}}
        onChange={(e)=>setCustomBoard(e.target.value)}
        value={customBoard}
      />
      <button onClick={handlePlayClick}>Play</button>
    </section> :
     
      <Board currentBoard={currentBoard} resetBoard={resetBoard}/>
    }
    </div>
  );
}

export default App;
