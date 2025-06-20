import React from 'react'
import './Calculator.css'
function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input className='input-box' type="text" name="input" id="input" />
            <div>
                <button className='btn-cal'onClick={handle}>(</button>
                <button className='btn-cal'onClick={handle}>)</button>
                <button className='btn-cal'onClick={handle}>AC</button>
                <button className='btn-cal'onClick={handle}><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal'onClick={handle}>7</button> 
                <button className='btn-cal'onClick={handle}>8</button>
                <button className='btn-cal'onClick={handle}>9</button>
                <button className='btn-cal'onClick={handle}>*</button> <br />
                <button className='btn-cal'onClick={handle}>4</button>
                <button className='btn-cal'onClick={handle}>5</button> 
                <button className='btn-cal'onClick={handle}>6</button>
                <button className='btn-cal'onClick={handle}>-</button> <br />
                <button className='btn-cal'onClick={handle}>1</button>
                <button className='btn-cal'onClick={handle}>2</button>
                <button className='btn-cal'onClick={handle}>3</button>
                <button className='btn-cal'onClick={handle}>+</button> <br />
                <button className='btn-cal'onClick={handle}>.</button>
                <button className='btn-cal'onClick={handle}>0</button>
                <button className='btn-cal'onClick={handle}>=</button>
                <button className='btn-cal'onClick={handle}>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator