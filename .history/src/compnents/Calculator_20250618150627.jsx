import React from 'react'

function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input type="text" name="input" id="input" />
            <div>
                <button className='btn-cal' style={btn-}>(</button>
                <button className='btn-cal' style={btn-}>)</button>
                <button className='btn-cal' style={btn-}>AC</button>
                <button className='btn-cal' style={btn-}><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal' style={btn-}>7</button> 
                <button className='btn-cal' style={btn-}>8</button>
                <button className='btn-cal' style={btn-}>9</button>
                <button className='btn-cal' style={btn-}>*</button> <br />
                <button className='btn-cal' style={btn-}>4</button>
                <button className='btn-cal' style={btn-}>5</button> 
                <button className='btn-cal' style={btn-}>6</button>
                <button className='btn-cal' style={btn-}>-</button> <br />
                <button className='btn-cal' style={btn-}>1</button>
                <button className='btn-cal' style={btn-}>2</button>
                <button className='btn-cal' style={btn-}>3</button>
                <button className='btn-cal' style={btn-}>+</button> <br />
                <button className='btn-cal' style={btn-}>.</button>
                <button className='btn-cal' style={btn-}>0</button>
                <button className='btn-cal' style={btn-}>=</button>
                <button className='btn-cal' style={btn-}>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator