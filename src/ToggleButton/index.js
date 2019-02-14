import React, {Component} from 'react';
import './style.css';

class ToggleButton extends Component{
    render(){
        const props = this.props; 
        return (
            <label className='toggler__label' style={props.style}>
                <input type="checkbox" hidden="hidden" name={props.name || 'hidden'} />
                <div className='toggler'></div>
            </label>
        );
    }
}

export default ToggleButton;
