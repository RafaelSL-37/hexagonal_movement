import { differenceBasedOnDirectionForOdd, differenceBasedOnDirectionForEven } from '../utils/hexagonal-grid-dy-table'

function isNotOutOfBoundaries(y, x) {
    return true; //CHECK IF OUT OF BOUNDARIES
}

export function onCellClick(grid, setGrid, phase, setPhase, y, x) {
    // alert(`x = ${x}, y = ${y}`)

    switch (phase) {
        case 'neutral':
            if (grid[y][x] === 'cell-actor') {
                console.log(y, x, grid[y][x])
                
                if (y/2 > 0) {
                    for (const differenceByDirection of differenceBasedOnDirectionForOdd) {
                        const newY = y-differenceByDirection.dy;
                        const newX = x-differenceByDirection.dx;

                        if (isNotOutOfBoundaries(newY, newX) && grid[newY][newX] === 'cell-empty') grid[newY][newX] = 'cell-range';
                    }
                } else {
                    for (const differenceByDirection of differenceBasedOnDirectionForEven) {
                        const newY = y-differenceByDirection.dy;
                        const newX = x-differenceByDirection.dx;

                        if (isNotOutOfBoundaries(newY, newX) && grid[newY][newX] === 'cell-empty') grid[newY][newX] = 'cell-range';
                    }
                }

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
            }
            break;
        default:
            break;
    }
}