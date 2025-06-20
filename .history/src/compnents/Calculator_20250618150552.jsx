import React from 'react'

function Calculator() {
  return (
    <>
        <div className="Calculator">
            <h1>Calculator</h1>
            <input type="text" name="input" id="input" />
            <div>
                <button class>(</button>
                <button class>)</button>
                <button class>AC</button>
                <button class><i class="fa-solid fa-delete-left"></i></button> <br />
                <button class>7</button> 
                <button class>8</button>
                <button class>9</button>
                <button class>*</button> <br />
                <button class>4</button>
                <button class>5</button> 
                <button class>6</button>
                <button class>-</button> <br />
                <button class>1</button>
                <button class>2</button>
                <button class>3</button>
                <button class>+</button> <br />
                <button class>.</button>
                <button class>0</button>
                <button class>=</button>
                <button class>/</button>
            </div>
        </div>
    </>
  )
}

export default Calculator