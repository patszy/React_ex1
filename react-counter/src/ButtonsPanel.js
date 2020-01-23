import React from 'react';

const ButtonsPanel = props => {
    return (
        <div className='buttons-pannel'>
            <button onClick={props.changeCounter}>Add</button>
            <button onClick={() => props.resetCounter(false)}>ReInit</button>
            <button onClick={() => props.resetCounter(true)}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;