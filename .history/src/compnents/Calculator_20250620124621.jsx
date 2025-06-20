import React, { useState } from 'react';
import './Calculator.css';
import { FaBackspace } from "react-icons/fa";

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
            calculateResult();
        } else if (value === '√') {
            setInput(prev => `Math.sqrt(${prev})`);
        } else if (value === 'x²') {
            setInput(prev => `Math.pow(${prev},2)`);
        } else if (value === 'x^y') {
            setInput(prev => `${prev}^`);
        } else if (value === '1/x') {
            setInput(prev => `1/(${prev})`);
        } else if (value === 'log') {
            setInput(prev => `Math.log10(${prev})`);
        } else if (value === 'ln') {
            setInput(prev => `Math.log(${prev})`);
        } else if (value === 'π') {
            setInput(prev => prev + 'Math.PI');
        } else if (value === 'e') {
            setInput(prev => prev + 'Math.E');
        } else if (value === '10^x') {
            setInput(prev => `Math.pow(10,${prev})`);
        } else if (value === 'x!') {
            setInput(prev => `factorial(${prev})`);
        } else {
            setInput(prev => prev + value);
        }
    };

    const factorial = (n) => {
        if (n < 0) return NaN;
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    };

    const calculateResult = () => {
        try {
            // Replace ^ with ** for exponentiation
            let expression = input.replace(/\^/g, '**');
            // Evaluate the expression
            setResult(eval(expression).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <h1>Scientific Calculator</h1>
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('π')}>π</button>
                <button onClick={() => handleClick('(')}>(</button>
                <button onClick={() => handleClick(')')}>)</button>
                <button onClick={() => handleClick('AC')} className="clear">AC</button>
                <button onClick={() => handleClick('DEL')} className="delete"><FaBackspace /></button>

                <button onClick={() => handleClick('mod')}>mod</button>
                <button onClick={() => handleClick('exp')}>exp</button>
                <button onClick={() => handleClick('1/x')}>1/x</button>
                <button onClick={() => handleClick('x²')}>x²</button>
                <button onClick={() => handleClick('Math.abs()')}>|x|</button>
                               
                <button onClick={() => handleClick('√')}>√</button>
                <button onClick={() => handleClick('e')}>e</button>
                <button onClick={() => handleClick('x!')}>x!</button>
                <button onClick={() => handleClick('x^y')}>x^y</button>
                <button className="operator" onClick={() => handleClick('/')}>/</button>
                
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button className="operator" onClick={() => handleClick('*')}>×</button>
                
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                
                <button onClick={() => handleClick('log')}>log</button>
                <button onClick={() => handleClick('ln')}>ln</button>
                <button onClick={() => handleClick('10^x')}>10^x</button>
                <button className="operator" onClick={() => handleClick('-')}>-</button>
                
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button className="operator" onClick={() => handleClick('+')}>+</button>
                
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button className="equals" onClick={() => handleClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Calculator;