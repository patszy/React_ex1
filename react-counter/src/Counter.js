import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

class Counter extends Component {
    constructor (props) {
        super(props);

        let initValue = 0;

        if(!isNaN(initValue)) initValue = parseInt(this.props.initValue);

        this.state = {
            counterValue: initValue,
            stepValue: 1
        }
    }

    addOne = () => {
        this.setState(prevState => {
            console.log(this.props.stepValue)
            return ( {counterValue: prevState.counterValue + prevState.stepValue} );
        });
    }

    resetValue = resetBool => {
        if(resetBool) this.setState( {counterValue: 0} );
        else this.setState( {counterValue: this.props.initValue} );
    }

    setStepValue = event => {
        this.setState( {stepValue: parseInt(event.target.value)} );
    }

    render () {
        return (
        <div className="counter">
            <CounterDisplay currentCounterValue={this.state.counterValue} />
            <ButtonsPanel changeCounter={this.addOne} resetCounter={this.resetValue}/>
            <Step setStep={this.setStepValue} inputValue={this.state.stepValue} />
        </div>
        );
    }
}

export default Counter;