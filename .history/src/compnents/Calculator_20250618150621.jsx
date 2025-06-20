import React from 'react'

function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input type="text" name="input" id="input" />
            <div>
                <button className='btn-cal' style={}>(</button>
                <button className='btn-cal' style={}>)</button>
                <button className='btn-cal' style={}>AC</button>
                <button className='btn-cal' style={}><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className='btn-cal' style={}>7</button> 
                <button className='btn-cal' style={}>8</button>
                <button className='btn-cal' style={}>9</button>
                <button className='btn-cal' style={}>*</button> <br />
                <button className='btn-cal' style={}>4</button>
                <button className='btn-cal' style={}>5</button> 
                <button className='btn-cal' style={}>6</button>
                <button className='btn-cal' style={}>-</button> <br />
                <button className='btn-cal' style={}>1</button>
                <button className='btn-cal' style={}>2</button>
                <button className='btn-cal' style={}>3</button>
                <button className='btn-cal' style={}>+</button> <br />
                <button className='btn-cal' style={}>.</button>
                <button className='btn-cal' style={}>0</button>
                <button className='btn-cal' style={}>=</button>
                <button className='btn-cal' style={}>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator