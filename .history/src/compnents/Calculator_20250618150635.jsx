import React from 'react'

function Calculator() {
  return (
    <>
        <div className="Calculator">
            
            <h1>Calculator</h1>
            <input type="text" name="input" id="input" />
            <div>
                <button className='btn-cal' style={btn-style}>(</button>
                <button className='btn-cal' style={btn-style}>)</button>
                <button className='btn-cal' style={btn-style}>AC</button>
                <button className='btn-cal' style={btn-style}><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal' style={btn-style}>7</button> 
                <button className='btn-cal' style={btn-style}>8</button>
                <button className='btn-cal' style={btn-style}>9</button>
                <button className='btn-cal' style={btn-style}>*</button> <br />
                <button className='btn-cal' style={btn-style}>4</button>
                <button className='btn-cal' style={btn-style}>5</button> 
                <button className='btn-cal' style={btn-style}>6</button>
                <button className='btn-cal' style={btn-style}>-</button> <br />
                <button className='btn-cal' style={btn-style}>1</button>
                <button className='btn-cal' style={btn-style}>2</button>
                <button className='btn-cal' style={btn-style}>3</button>
                <button className='btn-cal' style={btn-style}>+</button> <br />
                <button className='btn-cal' style={btn-style}>.</button>
                <button className='btn-cal' style={btn-style}>0</button>
                <button className='btn-cal' style={btn-style}>=</button>
                <button className='btn-cal' style={btn-style}>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator