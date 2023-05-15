import React, { useState } from 'react';
import { onCellClick } from '../handlers/click-handler';
import '../style/style.css'

function Grid() {
  const [phase, setPhase] = useState('neutral');

  const [grid, setGrid] = useState([
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-obstacle', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-actor', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
    ['cell-empty', 'cell-empty', 'cell-empty', 'cell-obstacle', 'cell-empty'],
    ['cell-obstacle', 'cell-empty', 'cell-empty', 'cell-empty', 'cell-empty'],
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
      <div className='phase-text'>
        {phase}
      </div>
    </div>  
  );
}
  
export default Grid;