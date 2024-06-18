import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [screen, setScreen] = useState('')

  return (
    <>
      <div>
        <h1> Simple Calculator </h1>
        <div className = "Calculator">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
          

          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>x</button>

          <button>0</button>
          <button>.</button>
          <button>AC</button>

          <button>/</button>
          
          
          <button>(</button>
          <button>)</button>
          <button>Ans</button>
          
          <button>=</button>
          

        </div>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
