export function onCellClick(grid, setGrid, phase, setPhase, x, y) {
    switch (phase) {
        case 'neutral':
            if (grid[y][x] === 'cell-actor') {
                //spawn range if not obstacle or actor

                setPhase('selected');
            }
            break;
        case 'selected':
            if (grid[y][x] === 'cell-range') {
                const newGrid = grid;

                //iterate grid to clear range and position cells

                newGrid[y][x] = 'cell-actor';

                setGrid(newGrid);
                setPhase('neutral');
            }
            break;
        default:
            break;
    }
}