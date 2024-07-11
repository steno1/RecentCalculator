// Importing the CSS file for styling the Calculator component

import './Calculator.css';

import React, { useState } from 'react';

// Importing necessary React hooks and functions


// Calculator component definition
const Calculator = () => {
    // State hook to manage the display text
    const [display, setDisplay] = useState('');

    // Function to handle button clicks
    const handleClick = (value) => {
        // Handle different button values
        if (value === '=') {
            calculate(); // Calculate result if '=' is clicked
        } else if (value === 'C') {
            setDisplay(''); // Clear the display if 'C' (Clear) is clicked
        } else {
            setDisplay(display + value); // Append the clicked button value to the display
        }
    };

    // Function to evaluate and display the result
    const calculate = () => {
        try {
            setDisplay(eval(display).toString()); // Use eval() to calculate and display the result
        } catch {
            setDisplay('Error'); // Display 'Error' if there's an invalid expression
        }
    };

    // JSX structure representing the Calculator UI
    return (
        <div className="container">
            <form>
                {/* Display input field */}
                <input type="text" id="display" value={display} readOnly />

                {/* Calculator buttons */}
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

// Exporting the Calculator component as the default export
export default Calculator;
