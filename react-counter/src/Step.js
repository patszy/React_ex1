import React from 'react';

const Step = props=> {
    return (
        <p>Step: <input type="number" min="1" value={props.inputValue} onChange={props.setStep} /></p>
    );
}

export default Step;