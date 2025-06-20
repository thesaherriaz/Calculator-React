import React from 'react'

function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input type="text" name="input" id="input" />
            <div>
                <button>AC</button>
                <button>AC</button>
                <button>AC</button>
                <button>DEL</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button> <br />
                <button>4</button>
                <button>5</button> 
                <button>6</button>
                <button>-</button> <br />
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button> <br />
                <button>.</button>
                <button>0</button>
                <button>=</button>
                <button>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator