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
        <table className='table'>
          <tr className='row-odd'>
            <td className={grid[0][0]} onClick={onCellClick(grid, setGrid, phase, setPhase, 0, 0)}></td>
            <td className={grid[0][1]} onClick={onCellClick(grid, setGrid, phase, setPhase, 0, 1)}></td>
            <td className={grid[0][2]} onClick={onCellClick(grid, setGrid, phase, setPhase, 0, 2)}></td>
            <td className={grid[0][3]} onClick={onCellClick(grid, setGrid, phase, setPhase, 0, 3)}></td>
            <td className={grid[0][4]} onClick={onCellClick(grid, setGrid, phase, setPhase, 0, 4)}></td>
          </tr>
          <tr className='row'>
            <td className={grid[1][0]} onClick={onCellClick(grid, setGrid, phase, setPhase, 1, 0)}></td>
            <td className={grid[1][1]} onClick={onCellClick(grid, setGrid, phase, setPhase, 1, 1)}></td>
            <td className={grid[1][2]} onClick={onCellClick(grid, setGrid, phase, setPhase, 1, 2)}></td>
            <td className={grid[1][3]} onClick={onCellClick(grid, setGrid, phase, setPhase, 1, 3)}></td>
            <td className={grid[1][4]} onClick={onCellClick(grid, setGrid, phase, setPhase, 1, 4)}></td>
          </tr>        
          <tr className='row-odd'>
            <td className={grid[2][0]} onClick={onCellClick(grid, setGrid, phase, setPhase, 2, 0)}></td>
            <td className={grid[2][1]} onClick={onCellClick(grid, setGrid, phase, setPhase, 2, 1)}></td>
            <td className={grid[2][2]} onClick={onCellClick(grid, setGrid, phase, setPhase, 2, 2)}></td>
            <td className={grid[2][3]} onClick={onCellClick(grid, setGrid, phase, setPhase, 2, 3)}></td>
            <td className={grid[2][4]} onClick={onCellClick(grid, setGrid, phase, setPhase, 2, 4)}></td>
          </tr>        
          <tr className='row'>
            <td className={grid[3][0]} onClick={onCellClick(grid, setGrid, phase, setPhase, 3, 0)}></td>
            <td className={grid[3][1]} onClick={onCellClick(grid, setGrid, phase, setPhase, 3, 1)}></td>
            <td className={grid[3][2]} onClick={onCellClick(grid, setGrid, phase, setPhase, 3, 2)}></td>
            <td className={grid[3][3]} onClick={onCellClick(grid, setGrid, phase, setPhase, 3, 3)}></td>
            <td className={grid[3][4]} onClick={onCellClick(grid, setGrid, phase, setPhase, 3, 4)}></td>
          </tr>        
          <tr className='row-odd'>
            <td className={grid[4][0]} onClick={onCellClick(grid, setGrid, phase, setPhase, 4, 0)}></td>
            <td className={grid[4][1]} onClick={onCellClick(grid, setGrid, phase, setPhase, 4, 1)}></td>
            <td className={grid[4][2]} onClick={onCellClick(grid, setGrid, phase, setPhase, 4, 2)}></td>
            <td className={grid[4][3]} onClick={onCellClick(grid, setGrid, phase, setPhase, 4, 3)}></td>
            <td className={grid[4][4]} onClick={onCellClick(grid, setGrid, phase, setPhase, 4, 4)}></td>
          </tr>        
          <tr className='row'>
            <td className={grid[5][0]} onClick={onCellClick(grid, setGrid, phase, setPhase, 5, 0)}></td>
            <td className={grid[5][1]} onClick={onCellClick(grid, setGrid, phase, setPhase, 5, 1)}></td>
            <td className={grid[5][2]} onClick={onCellClick(grid, setGrid, phase, setPhase, 5, 2)}></td>
            <td className={grid[5][3]} onClick={onCellClick(grid, setGrid, phase, setPhase, 5, 3)}></td>
            <td className={grid[5][4]} onClick={onCellClick(grid, setGrid, phase, setPhase, 5, 4)}></td>
          </tr>
        </table>
      </div>
      <br /><br /><br /><br /><br />
      <div className='phase-text'>
        {phase}
      </div>
    </div>  
  );
}
  
export default Grid;