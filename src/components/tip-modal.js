function TipModal({ toggleFunction }) {
    return(
        <div className='modal'>
            <div className='tips'>
                <h3>
                    Tips:
                </h3>
                <ul>
                    Click on the buttons below the grid to enable add/remove obstacles <div style={{ 'background-color': 'red' }} className='text-sphere' /> or actors <div style={{ 'background-color': 'limegreen' }} className='text-sphere' />Remember to cancel it after.
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