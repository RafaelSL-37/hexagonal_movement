export function removeObjectFromGrid(grid, y, x, setGrid, setPhase) {
    if (grid[y][x] === 'cell-actor' || grid[y][x] === 'cell-obstacle' ) {
        grid[y][x] = 'cell-empty';

        setGrid(grid);

        console.log(grid);
        // setPhase('neutral'); //TODO: CHANGE THIS AS TO UPDATE THE GRID INSTANTLY
    }
}