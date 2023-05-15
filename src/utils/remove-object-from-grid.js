export function removeObjectFromGrid(grid, y, x, setGrid, setPhase) {
    if (grid[y][x] === 'cell-actor' || grid[y][x] === 'cell-obstacle' ) {
        grid[y][x] = 'cell-empty';

        setGrid(grid);
        setPhase('neutral');
    }
}