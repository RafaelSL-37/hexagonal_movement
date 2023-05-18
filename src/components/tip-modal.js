function TipModal({ toggleFunction }) {
    return(
        //TODO: make it relative to the other parts
        <div className='modal'>
            <div className='tips'>
                <h3>
                    Tips:
                </h3>
                {/* TODO: fix tips with spheres */}
                <ul>
                    Click on the buttons below the grid to enable add/remove obstacles -insert little red sphere here- or actors -insert little green sphere here-. Remember to cancel it after.
                </ul>
                <ul>
                    Your actor can move once clicked. Your actor cannot move to occupied cells nor obstacles can move.
                </ul>
            </div>
            <div className='close-modal'>
                <button onClick={() => toggleFunction(false)}>
                    X
                </button>
            </div>
        </div>
    )
};

export default TipModal;