import React from 'react'

function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input type="text" name="input" id="input" />
            <div>
                <button className=''>(</button>
                <button className=''>)</button>
                <button className=''>AC</button>
                <button className=''><i class="fa-solid fa-delete-left"></i></button> <br />
                <button className=''>7</button> 
                <button className=''>8</button>
                <button className=''>9</button>
                <button className=''>*</button> <br />
                <button className=''>4</button>
                <button className=''>5</button> 
                <button className=''>6</button>
                <button className=''>-</button> <br />
                <button className=''>1</button>
                <button className=''>2</button>
                <button className=''>3</button>
                <button className=''>+</button> <br />
                <button className=''>.</button>
                <button className=''>0</button>
                <button className=''>=</button>
                <button className=''>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator