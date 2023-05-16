import { isNotOutOfBoundaries } from './grid-check-out-of-boundaries';

export function fillGridWithRangeAroundCell(grid, differences, y, x){
    const rangeCells = [];

    for (const differenceByDirection of differences) {
        const newY = y+differenceByDirection.dy;
        const newX = x+differenceByDirection.dx;

        if (isNotOutOfBoundaries(newY, newX, grid) && grid[newY][newX] === 'cell-empty') {
            grid[newY][newX] = 'cell-range';
            rangeCells.push({ y: newY, x: newX })  
        } 
    }

    return { grid, rangeCells };
}