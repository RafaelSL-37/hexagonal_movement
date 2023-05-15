export function resetGrid(grid, setGrid) {
    const newGrid = grid.map((array) => {
        return array.map((cell) => {
            if (cell === 'cell-range') {
                return 'cell-empty';
            } else if (cell === 'cell-selected') {
                return 'cell-actor';
            } else {
                return cell;
            }
        })
    });

    setGrid(newGrid);
}