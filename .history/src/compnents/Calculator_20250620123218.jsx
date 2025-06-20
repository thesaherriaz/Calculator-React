import React, { useState } from 'react';
import './Calculator.css';
import { FaDeleteLeft } from "react-icons/fa6";

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    
    const handleClick = (value) => {
        if (value === 'AC') {
            setInput('');
            setResult('');
        } else if (value === 'DEL') {
            setInput(prev => prev.slice(0, -1));
        } else if (value === '=') {
            try {
                // Note: Using eval is generally not recommended for production
                // Consider using a math expression evaluator library instead
                setResult(eval(input).toString());
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput(prev => prev + value);
        }
    };

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('(')}>(</button>
                <button onClick={() => handleClick(')')}>)</button>
                <button className="clear" onClick={() => handleClick('AC')}>AC</button>
                <button className="delete" onClick={() => handleClick('DEL')}><FaDeleteLeft /></button>
                
                <button onClick={() => handleClick('mod')}>mod</button>
                <button onClick={() => handleClick('exp')}>exp</button>
                <button onClick={() => handleClick('Math.abs()')}>|x|</button>
                <button className="operator" onClick={() => handleClick('/')}>/</button>
                
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button className="operator" onClick={() => handleClick('*')}>×</button>
                
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button className="operator" onClick={() => handleClick('-')}>-</button>
                
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button className="operator" onClick={() => handleClick('+')}>+</button>
                
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button className="equals" onClick={() => handleClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Calculator;