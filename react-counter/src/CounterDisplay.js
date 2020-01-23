import React from 'react';

const CounterDisplay = props => {
    return (
        <h2>Counter:
            <span>{props.currentCounterValue}</span>
        </h2> );
}

export default CounterDisplay;