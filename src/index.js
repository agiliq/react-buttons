import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './ToggleButton';

const App = () =>(
    <div>
        <h1>React Buttons App</h1>
    </div>
)


ReactDOM.render(
    <ToggleButton title="I'm not working" style={{color: "#000000"}}/>,
    document.getElementById('root')
)