import React, { useEffect, useState } from 'react';
import { onCellClick } from '../handlers/grid-cell-click-handler';
import { changePhaseOnButtonClick } from '../handlers/phase-button-click-handler';
// import { gridGenerator } from '../utils/grid-generator';
import '../style/style.css'

// const moveSpeed = 1;
// const gridDimension = {
//   rows: 5,
//   columns: 5,
// }

//TODO: discover how to execute this just once, at page load
// const initialGrid = gridGenerator(gridDimension);

function Grid() {
  const [phase, setPhase] = useState('neutral');
  const [grid, setGrid] = useState([
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
  ]);

  // const [grid, setGrid] = useState([]);

  // useEffect(() => {
  //   setGrid(initialGrid);
  // }, []);

  // const [grid, setGrid] = useState(initialGrid);

  return (
    <div>
      <div className="grid">
        <div className='table'>
          {
            grid.map((array, i) => {
              console.log(i, i%2);

              return (
                <div className={i%2 === 0 ? 'row' : 'row-odd'}>
                  {
                    array.map((cell, j) => {
                      return <div className={grid[i][j]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, i, j)} />
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      <br /><br /><br />
      <div className='container'>
        {phase}
      </div> 
      <br /><br />
      <div className='container'>
        <button onClick={() => changePhaseOnButtonClick(setPhase, phase, 'spawn-actor')}>{phase !== 'spawn-actor' ? 'Add Actor' : 'Cancel'}</button>
        <button onClick={() => changePhaseOnButtonClick(setPhase, phase, 'spawn-obstacle')}>{phase !== 'spawn-obstacle' ? 'Add Obstacle' : 'Cancel'}</button>
        <button onClick={() => changePhaseOnButtonClick(setPhase, phase, 'remove-actor-or-obstacle')}>{phase !== 'remove-actor-or-obstacle' ? 'Remove Actor/Obstacle' : 'Cancel'}</button>
      </div>
    </div>  
  );
}
  
export default Grid;