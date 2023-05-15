import React, { useState } from 'react';
import { onCellClick } from '../handlers/grid-cell-click-handler';
import { changePhaseOnButtonClick } from '../handlers/phase-button-click-handler';
import '../style/style.css'

function Grid() {
  const [phase, setPhase] = useState('neutral');

  //TODO: construct function to set initial grid dynamically
  const [grid, setGrid] = useState([
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-actor', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
  ]);

  return (
    <div>
      <div className="grid">
        <div className='table'>
          <div className='row'>
            <div className={grid[0][0]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 0, 0)}></div>
            <div className={grid[0][1]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 0, 1)}></div>
            <div className={grid[0][2]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 0, 2)}></div>
            <div className={grid[0][3]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 0, 3)}></div>
            <div className={grid[0][4]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 0, 4)}></div>
          </div>
          <div className='row-odd'>
            <div className={grid[1][0]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 1, 0)}></div>
            <div className={grid[1][1]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 1, 1)}></div>
            <div className={grid[1][2]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 1, 2)}></div>
            <div className={grid[1][3]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 1, 3)}></div>
            <div className={grid[1][4]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 1, 4)}></div>
          </div>        
          <div className='row'>
            <div className={grid[2][0]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 2, 0)}></div>
            <div className={grid[2][1]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 2, 1)}></div>
            <div className={grid[2][2]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 2, 2)}></div>
            <div className={grid[2][3]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 2, 3)}></div>
            <div className={grid[2][4]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 2, 4)}></div>
          </div>        
          <div className='row-odd'>
            <div className={grid[3][0]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 3, 0)}></div>
            <div className={grid[3][1]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 3, 1)}></div>
            <div className={grid[3][2]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 3, 2)}></div>
            <div className={grid[3][3]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 3, 3)}></div>
            <div className={grid[3][4]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 3, 4)}></div>
          </div>        
          <div className='row'>
            <div className={grid[4][0]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 4, 0)}></div>
            <div className={grid[4][1]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 4, 1)}></div>
            <div className={grid[4][2]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 4, 2)}></div>
            <div className={grid[4][3]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 4, 3)}></div>
            <div className={grid[4][4]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 4, 4)}></div>
          </div>        
          <div className='row-odd'>
            <div className={grid[5][0]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 5, 0)}></div>
            <div className={grid[5][1]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 5, 1)}></div>
            <div className={grid[5][2]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 5, 2)}></div>
            <div className={grid[5][3]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 5, 3)}></div>
            <div className={grid[5][4]} onClick={() => onCellClick(grid, setGrid, phase, setPhase, 5, 4)}></div>
          </div>
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