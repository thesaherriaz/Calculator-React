import React, { useState, useEffect, useCallback } from 'react';
import './Calculator.css';
import { FaBackspace } from "react-icons/fa";

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const factorial = useCallback((n) => {
        if (n < 0) return NaN;
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }, []);

    const calculateResult = useCallback(() => {
        try {
            let expression = input
                .replace(/\^/g, '**')
                .replace(/mod/g, '%')
                .replace(/π/g, 'Math.PI')
                .replace(/e/g, 'Math.E');
            
            // Safer evaluation
            setResult(new Function('return ' + expression)().toString());
        } catch (error) {
            setResult('Error');
        }
    }, [input]);

    const handleClick = useCallback((value) => {
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
        } else if (value === 'x³') {
            setInput(prev => `Math.pow(${prev},3)`);
        } else if (value === 'x') {
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
        } else if (value === 'mod') {
            setInput(prev => `${prev}%`);
        } else if (value === 'exp') {
            setInput(prev => `Math.exp(${prev})`);
        } else if (value === '|x|') {
            setInput(prev => `Math.abs(${prev})`);
        } else if (value === '%') {
            setInput(prev => `(${prev})/100`);
        }else {
            setInput(prev => prev + value);
        }
    }, [calculateResult]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            if (/[0-9+\-*/.%πe=]/.test(key)) {
                handleClick(key);
            } else if (key === 'Enter') {
                handleClick('=');
            } else if (key === 'Backspace') {
                handleClick('DEL');
            } else if (key === 'Escape') {
                handleClick('AC');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleClick]);

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
                
                <button onClick={() => handleClick('10^x')}>10^x</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button className="operator" onClick={() => handleClick('*')}>×</button>
                
                <button onClick={() => handleClick('log')}>log</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button className="operator" onClick={() => handleClick('-')}>-</button>
                
                <button onClick={() => handleClick('ln')}>ln</button>
                
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button className="operator" onClick={() => handleClick('+')}>+</button>
                
                <button onClick={() => handleClick('x³')}>x³</button>
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button className="equals" onClick={() => handleClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Calculator;