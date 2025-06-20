import React from 'react'
import './Calculator.css'
import { useState } from 'react'

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const handleClick = (value) => {
        return () => {
            const input = document.getElementById('input');
            if (value === 'AC') {
                setInput('');
            } else if (value === 'DEL') {
                setInput(input.value.slice(0, -1));
            } else if (value === '=') {
                try {
                    setResult(eval(input));
                    setInput('');
                } catch (error) {
                    setInput('Error');
                }
            } else {
                setInput(input.value + value);
            }
        };
    }
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <div className="input">{input}</div>
            <div className="result">{result}</div>
            <div>
                <button className='btn-cal'onClick={handleClick('(')}>(</button>
                <button className='btn-cal'onClick={handleClick(')')}>)</button>
                <button className='btn-cal'onClick={handleClick('AC')}>AC</button>
                <button className='btn-cal'onClick={handleClick('DEL')}><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal'onClick={handleClick('7')}>7</button> 
                <button className='btn-cal'onClick={handleClick('8')}>8</button>
                <button className='btn-cal'onClick={handleClick('9')}>9</button>
                <button className='btn-cal'onClick={handleClick('*')}>*</button> <br />
                <button className='btn-cal'onClick={handleClick('4')}>4</button>
                <button className='btn-cal'onClick={handleClick('5')}>5</button> 
                <button className='btn-cal'onClick={handleClick('6')}>6</button>
                <button className='btn-cal'onClick={handleClick('-')}>-</button> <br />
                <button className='btn-cal'onClick={handleClick('1')}>1</button>
                <button className='btn-cal'onClick={handleClick('2')}>2</button>
                <button className='btn-cal'onClick={handleClick('3')}>3</button>
                <button className='btn-cal'onClick={handleClick('+')}>+</button> <br />
                <button className='btn-cal'onClick={handleClick('.')}>.</button>
                <button className='btn-cal'onClick={handleClick('0')}>0</button>
                <button className='btn-cal'onClick={handleClick('=')}>=</button>
                <button className='btn-cal'onClick={handleClick('/')}>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator