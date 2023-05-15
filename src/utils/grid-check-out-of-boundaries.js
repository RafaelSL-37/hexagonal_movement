export function isNotOutOfBoundaries(y, x, grid) {
    if (x < 0 || y < 0 || x > grid[0].length-1 || y > grid.length-1) {
        return false;
    } else {
        return true;
    }
}