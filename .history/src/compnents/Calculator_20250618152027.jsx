import React from 'react'
import './Calculator.css'
function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input className='input-box' type="text" name="input" id="input" />
            <div>
                <button className='btn-cal'onClick={}>(</button>
                <button className='btn-cal'onClick={}>)</button>
                <button className='btn-cal'onClick={}>AC</button>
                <button className='btn-cal'onClick={}><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal'onClick={}>7</button> 
                <button className='btn-cal'onClick={}>8</button>
                <button className='btn-cal'onClick={}>9</button>
                <button className='btn-cal'onClick={}>*</button> <br />
                <button className='btn-cal'onClick={}>4</button>
                <button className='btn-cal'onClick={}>5</button> 
                <button className='btn-cal'onClick={}>6</button>
                <button className='btn-cal'onClick={}>-</button> <br />
                <button className='btn-cal'onClick={}>1</button>
                <button className='btn-cal'onClick={}>2</button>
                <button className='btn-cal'onClick={}>3</button>
                <button className='btn-cal'onClick={}>+</button> <br />
                <button className='btn-cal'onClick={}>.</button>
                <button className='btn-cal'onClick={}>0</button>
                <button className='btn-cal'onClick={}>=</button>
                <button className='btn-cal'onClick={}>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator