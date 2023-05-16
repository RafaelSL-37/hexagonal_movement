import { differenceBasedOnDirectionForOdd, differenceBasedOnDirectionForEven } from '../utils/hexagonal-grid-dy-table'
import { fillGridWithRangeAroundCell } from '../utils/grid-range-filler';

export function neutralPhaseOnClickHandler(grid, y, x, moveSpeed, setGrid, setPhase) {
    if (grid[y][x] === 'cell-actor') {
        let newGrid = grid;
        let referenceCells = [
            {y, x},
        ];

        for (let i = 0; i < moveSpeed; i++) {
            const tempReferenceCells = [];    

            for (const referenceCell of referenceCells) { //TODO: fix bug where next iterations of movespeed have dislocated range
                const filledGridData = y%2 > 0
                    ? fillGridWithRangeAroundCell(newGrid, differenceBasedOnDirectionForOdd, referenceCell.y, referenceCell.x) 
                    : fillGridWithRangeAroundCell(newGrid, differenceBasedOnDirectionForEven, referenceCell.y, referenceCell.x);

                newGrid = filledGridData.grid;
                tempReferenceCells.push(...filledGridData.rangeCells);
            }

            referenceCells = tempReferenceCells;
        }
        
        newGrid[y][x] = 'cell-selected';

        setGrid(newGrid);
        setPhase('selected');
    }
}