import React, { useEffect, useState } from 'react';
import { onCellClick } from '../handlers/grid-cell-click-handler';
import { changePhaseOnButtonClick } from '../handlers/phase-button-click-handler';
import { gridGenerator } from '../utils/grid-generator';
import '../style/style.css'

// const moveSpeed = 1;
const gridDimension = {
  rows: 6,
  columns: 6,
}

const initialGrid = gridGenerator(gridDimension);

function Grid() {
  const [phase, setPhase] = useState('neutral');

  useEffect(() => {
    setGrid(initialGrid);
  }, []);

  const [grid, setGrid] = useState(initialGrid);

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
        Current Phase: {phase}
      </div> 
      <br /><br />
      <div className='container'>
        <button onClick={() => changePhaseOnButtonClick(grid, setGrid, setPhase, phase, 'spawn-actor')}>{phase !== 'spawn-actor' ? 'Add Actor' : 'Cancel'}</button>
        <button onClick={() => changePhaseOnButtonClick(grid, setGrid, setPhase, phase, 'spawn-obstacle')}>{phase !== 'spawn-obstacle' ? 'Add Obstacle' : 'Cancel'}</button>
        <button onClick={() => changePhaseOnButtonClick(grid, setGrid, setPhase, phase, 'remove-actor-or-obstacle')}>{phase !== 'remove-actor-or-obstacle' ? 'Remove Actor/Obstacle' : 'Cancel'}</button>
      </div>
    </div>  
  );
}
  
export default Grid;