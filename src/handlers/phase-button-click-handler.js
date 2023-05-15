import { resetGrid } from "../utils/reset-grid";

export function changePhaseOnButtonClick(grid, setGrid, setPhase, currentPhase, phaseToBe) {
    setPhase(phaseToBe);

    resetGrid(grid, setGrid);

    if (phaseToBe === currentPhase) {
        setPhase('neutral');
    }
}