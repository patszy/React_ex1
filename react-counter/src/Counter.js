import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {
    constructor (props) {
        super(props);

        let initValue = 0;

        if(!isNaN(initValue)) initValue = parseInt(this.props.initValue);

        this.state = {
            counterValue: initValue
        }
    }

    addOne = () => {
        this.setState(prevState => {
            return ( {counterValue: prevState.counterValue + 1} );
        });
    }

    resetValue = resetBool => {
        if(resetBool) this.setState( {counterValue: 0} );
        else this.setState( {counterValue: this.props.initValue} );
    }

    render () {
        return (
        <div className="counter">
            <CounterDisplay currentCounterValue={this.state.counterValue} />
            <ButtonsPanel changeCounter={this.addOne} resetCounter={this.resetValue}/>
        </div>
        );
    }
}

export default Counter;