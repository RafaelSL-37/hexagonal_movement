import { neutralPhaseOnClickHandler } from './neutral-phase-click-handler';
import { selectedPhaseOnClickHandler } from './selected-phase-click-handler';
import { spawnObjectOnGrid } from '../utils/spawn-object-on-grid';
import { removeObjectFromGrid } from '../utils/remove-object-from-grid';

export function onCellClick(grid, setGrid, phase, setPhase, y, x) {
    switch (phase) {
        case 'neutral':
            neutralPhaseOnClickHandler(grid, y, x, setGrid, setPhase);
            break;
        case 'selected':
            selectedPhaseOnClickHandler(grid, y, x, setGrid, setPhase)
            break;
        case 'spawn-actor':
            spawnObjectOnGrid(grid, y, x, 'cell-actor', setGrid, setPhase)
            break;
        case 'spawn-obstacle':
            spawnObjectOnGrid(grid, y, x, 'cell-obstacle', setGrid, setPhase)
            break;
        case 'remove-actor-or-obstacle':
            removeObjectFromGrid(grid, y, x, setGrid, setPhase)
            break;
        default:
            break;
    }
}