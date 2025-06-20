import React from 'react'
import './Calculator.css'
function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input className='input' type="text" name="input" id="input" />
            <div>
                <button className='btn-cal'>(</button>
                <button className='btn-cal'>)</button>
                <button className='btn-cal'>AC</button>
                <button className='btn-cal'><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal'>7</button> 
                <button className='btn-cal'>8</button>
                <button className='btn-cal'>9</button>
                <button className='btn-cal'>*</button> <br />
                <button className='btn-cal'>4</button>
                <button className='btn-cal'>5</button> 
                <button className='btn-cal'>6</button>
                <button className='btn-cal'>-</button> <br />
                <button className='btn-cal'>1</button>
                <button className='btn-cal'>2</button>
                <button className='btn-cal'>3</button>
                <button className='btn-cal'>+</button> <br />
                <button className='btn-cal'>.</button>
                <button className='btn-cal'>0</button>
                <button className='btn-cal'>=</button>
                <button className='btn-cal'>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator