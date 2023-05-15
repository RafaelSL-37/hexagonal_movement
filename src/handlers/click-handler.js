import { differenceBasedOnDirectionForOdd, differenceBasedOnDirectionForEven } from '../utils/hexagonal-grid-dy-table'

function isNotOutOfBoundaries(y, x) {
    if (x < 0 || y < 0 || x > 4 || y > 5) {
        return false;
    } else {
        return true;
    }
}

function fillGridWithRangeAroundCell(grid, differences, y, x){
    for (const differenceByDirection of differences) {
        const newY = y+differenceByDirection.dy;
        const newX = x+differenceByDirection.dx;

        if (isNotOutOfBoundaries(newY, newX) && grid[newY][newX] === 'cell-empty') grid[newY][newX] = 'cell-range';
    }

    return grid;
}

export function onCellClick(grid, setGrid, phase, setPhase, y, x) {
    switch (phase) {
        case 'neutral':
            if (grid[y][x] === 'cell-actor') {
                console.log(y, x, grid[y][x])
                
                const newGrid = y/2 > 0 
                    ? fillGridWithRangeAroundCell(grid, differenceBasedOnDirectionForOdd, y, x) 
                    : fillGridWithRangeAroundCell(grid, differenceBasedOnDirectionForEven, y, x);
                
                setGrid(newGrid);
                setPhase('selected');
            }
            break;
        case 'selected':
            if (grid[y][x] === 'cell-range') {
                const newGrid = grid.map((array) => {
                    return array.map((element) => {
                        return element = element === 'cell-range' || element === 'cell-actor' ? 'cell-empty' : element
                    })
                });

                newGrid[y][x] = 'cell-actor';

                setGrid(newGrid);
                setPhase('neutral');
            } else if (grid[y][x] === 'cell-actor') {
                const newGrid = grid.map((array) => {
                    return array.map((element) => {
                        return element = element === 'cell-range' ? 'cell-empty' : element
                    })
                });

                setGrid(newGrid);
                setPhase('neutral');
            }
            break;
        default:
            break;
    }
}