export function spawnObjectOnGrid(grid, y, x, object, setGrid, setPhase) {
    if (grid[y][x] === 'cell-empty') {
        grid[y][x] = object;

        setGrid(grid);
        setPhase('neutral');
    }
}