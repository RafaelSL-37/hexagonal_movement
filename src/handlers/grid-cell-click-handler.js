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
        case 'neutral': //TODO: create enum for phases
            if (grid[y][x] === 'cell-actor') {
                //TODO: change it to iterative based on movespeed
                const newGrid = y/2 > 0 
                    ? fillGridWithRangeAroundCell(grid, differenceBasedOnDirectionForOdd, y, x) 
                    : fillGridWithRangeAroundCell(grid, differenceBasedOnDirectionForEven, y, x); //TODO: fix even range being slightly off
                
                newGrid[y][x] = 'cell-selected';

                setGrid(newGrid);
                setPhase('selected');
            }
            break;
        case 'selected':
            if (grid[y][x] === 'cell-range') {
                const newGrid = grid.map((array) => {
                    return array.map((element) => {
                        return element = element === 'cell-range' || element === 'cell-selected' ? 'cell-empty' : element
                    })
                });

                newGrid[y][x] = 'cell-actor';

                setGrid(newGrid);
                setPhase('neutral');
            } else if (grid[y][x] === 'cell-selected') {
                const newGrid = grid.map((array) => {
                    return array.map((element) => {
                        return element = element === 'cell-range' ? 'cell-empty' : element
                    })
                });

                newGrid[y][x] = 'cell-actor';

                setGrid(newGrid);
                setPhase('neutral');
            }
            break;
        case 'spawn-actor':
            if (grid[y][x] === 'cell-empty') {
                grid[y][x] = 'cell-actor';

                setGrid(grid);
                setPhase('neutral');
            }
            break;
        case 'spawn-obstacle':
            if (grid[y][x] === 'cell-empty') {
                grid[y][x] = 'cell-obstacle';

                setGrid(grid);
                setPhase('neutral');
            }
            break;
        case 'remove-actor-or-obstacle':
            if (grid[y][x] === 'cell-actor' || grid[y][x] === 'cell-obstacle' ) {
                grid[y][x] = 'cell-empty';

                setGrid(grid);
                setPhase('neutral');
            }
            break;
        default:
            break;
    }
}