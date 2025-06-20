import React from 'react'

function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input type="text" name="input" id="input" />
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>4</button>
                <button>5</button> 
                <button>6</button>
            </div>
        </div>
    </>
  )
}

export default Calculator