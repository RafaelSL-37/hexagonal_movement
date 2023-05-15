export function selectedPhaseOnClickHandler(grid, y, x, setGrid, setPhase) {
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
}