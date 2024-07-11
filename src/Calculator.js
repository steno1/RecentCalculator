import './Calculator.css';

import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            setDisplay('');
        } else {
            setDisplay(display + value);
        }
    };

    const calculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch {
            setDisplay('Error');
        }
    };

    return (
        <div className="container">
            <form>
                <input type="text" id="display" value={display} readOnly />
                <input type="button" value="C" onClick={() => handleClick('C')} />
                <input type="button" value="/" onClick={() => handleClick('/')} />
                <input type="button" value="*" onClick={() => handleClick('*')} />
                <input type="button" value="7" onClick={() => handleClick('7')} />
                <input type="button" value="8" onClick={() => handleClick('8')} />
                <input type="button" value="9" onClick={() => handleClick('9')} />
                <input type="button" value="4" onClick={() => handleClick('4')} />
                <input type="button" value="5" onClick={() => handleClick('5')} />
                <input type="button" value="6" onClick={() => handleClick('6')} />
                <input type="button" value="1" onClick={() => handleClick('1')} />
                <input type="button" value="2" onClick={() => handleClick('2')} />
                <input type="button" value="3" onClick={() => handleClick('3')} />
                <input type="button" value="0" onClick={() => handleClick('0')} />
                <input type="button" value="." onClick={() => handleClick('.')} />
                <input type="button" value="-" onClick={() => handleClick('-')} />
                <input type="button" value="+" onClick={() => handleClick('+')} />
                <input type="button" value="=" id="plus" onClick={() => handleClick('=')} />
            </form>
        </div>
    );
};

export default Calculator;
