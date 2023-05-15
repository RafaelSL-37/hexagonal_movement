export function changePhaseOnButtonClick(setPhase, currentPhase, phaseToBe) {
    setPhase(phaseToBe);

    if (phaseToBe === currentPhase) {
        setPhase('neutral');
    }
}