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
        <div className="container mx-auto w-25 p-2">
            <form className="my-auto text-center row">
                <div className="">
                    <input type="text" id="display" value={display} readOnly /> {/* Display input field */}
                </div>
                <div>
                    {/* Calculator buttons */}
                    <input className="btn p-3 m-1" type="button" value="C" onClick={() => handleClick('C')} />
                    <input className="btn p-3 m-1" type="button" value="/" onClick={() => handleClick('/')} />
                    <input className="btn p-3 m-1" type="button" value="*" onClick={() => handleClick('*')} />
                </div>
                <div>
                    <input className="btn p-3 m-1" type="button" value="7" onClick={() => handleClick('7')} />
                    <input className="btn p-3 m-1" type="button" value="8" onClick={() => handleClick('8')} />
                    <input className="btn p-3 m-1" type="button" value="9" onClick={() => handleClick('9')} />
                </div>
                <div>
                    <input className="btn p-3 m-1" type="button" value="4" onClick={() => handleClick('4')} />
                    <input className="btn p-3 m-1" type="button" value="5" onClick={() => handleClick('5')} />
                    <input className="btn p-3 m-1" type="button" value="6" onClick={() => handleClick('6')} />
                </div>
                <div>
                    <input className="btn p-3 m-1" type="button" value="1" onClick={() => handleClick('1')} />
                    <input className="btn p-3 m-1" type="button" value="2" onClick={() => handleClick('2')} />
                    <input className="btn p-3 m-1" type="button" value="3" onClick={() => handleClick('3')} />
                </div>
                <div>
                    <input className="btn p-3 m-1" type="button" value="0" onClick={() => handleClick('0')} />
                    <input className="btn p-3 m-1" type="button" value="." onClick={() => handleClick('.')} />
                    <input className="btn p-3 m-1" type="button" value="-" onClick={() => handleClick('-')} />
                </div>
                <div>
                    <input className="btn p-3 m-1" type="button" value="+" onClick={() => handleClick('+')} />
                    <input className="btn p-3 m-1" type="button" value="=" id="plus" onClick={() => handleClick('=')} />
                </div>
            </form>
        </div>
    );
};

export default Calculator;
