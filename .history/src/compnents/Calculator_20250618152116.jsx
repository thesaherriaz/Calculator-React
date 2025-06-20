import React from 'react'
import './Calculator.css'
function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input className='input-box' type="text" name="input" id="input" />
            <div>
                <button className='btn-cal'onClick={handleClick('(')}>(</button>
                <button className='btn-cal'onClick={handleClick(')')}>)</button>
                <button className='btn-cal'onClick={handleClick('AC')}>AC</button>
                <button className='btn-cal'onClick={handleClick('DEL')}><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal'onClick={handleClick('7')}>7</button> 
                <button className='btn-cal'onClick={handleClick('8')}>8</button>
                <button className='btn-cal'onClick={handleClick('9')}>9</button>
                <button className='btn-cal'onClick={handleClick('')}>*</button> <br />
                <button className='btn-cal'onClick={handleClick('')}>4</button>
                <button className='btn-cal'onClick={handleClick('')}>5</button> 
                <button className='btn-cal'onClick={handleClick('')}>6</button>
                <button className='btn-cal'onClick={handleClick('')}>-</button> <br />
                <button className='btn-cal'onClick={handleClick('')}>1</button>
                <button className='btn-cal'onClick={handleClick('')}>2</button>
                <button className='btn-cal'onClick={handleClick('')}>3</button>
                <button className='btn-cal'onClick={handleClick('')}>+</button> <br />
                <button className='btn-cal'onClick={handleClick('')}>.</button>
                <button className='btn-cal'onClick={handleClick('')}>0</button>
                <button className='btn-cal'onClick={handleClick('')}>=</button>
                <button className='btn-cal'onClick={handleClick('')}>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator