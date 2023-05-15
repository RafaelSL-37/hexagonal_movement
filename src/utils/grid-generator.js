export function gridGenerator(gridDimension) {
    const grid = [];

    for (let i = 0; i < gridDimension.rows; i++) {
        const array = [];
        for (let j = 0; j < gridDimension.columns; j++) {
            array.push('cell-empty');
        }
        grid.push(array);
    }

    return grid;
}