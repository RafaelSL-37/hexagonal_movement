import React, { useState } from 'react';
import { onCellClick } from '../handlers/grid-cell-click-handler';
import { changePhaseOnButtonClick } from '../handlers/phase-button-click-handler';
import { gridGenerator } from '../utils/grid-generator';
import '../style/style.css'

const moveSpeed = 3;
const gridDimension = {
  rows: 10,
  columns: 10,
}
const initialGrid = gridGenerator(gridDimension);

function Grid() {
  const [phase, setPhase] = useState('neutral');
  const [grid, setGrid] = useState(initialGrid);

  //TODO: add modal with tips

  return (
    <div>
      <div className="grid">
        <div className='table'>
          {
            grid.map((array, i) => {
              return (
                <div className={i%2 === 0 ? 'row' : 'row-odd'}>
                  {
                    array.map((cell, j) => {
                      return <div className={grid[i][j]} onClick={() => onCellClick(grid, setGrid, moveSpeed, phase, setPhase, i, j)} />
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