import { differenceBasedOnDirectionForOdd, differenceBasedOnDirectionForEven } from '../utils/hexagonal-grid-dy-table'
import { fillGridWithRangeAroundCell } from '../utils/grid-range-filler';

export function neutralPhaseOnClickHandler(grid, y, x, setGrid, setPhase) {
    if (grid[y][x] === 'cell-actor') {
        //TODO: change it to iterative based on movespeed
        const newGrid = y%2 > 0 
            ? fillGridWithRangeAroundCell(grid, differenceBasedOnDirectionForOdd, y, x) 
            : fillGridWithRangeAroundCell(grid, differenceBasedOnDirectionForEven, y, x);
        
        newGrid[y][x] = 'cell-selected';

        setGrid(newGrid);
        setPhase('selected');
    }
}