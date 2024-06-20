import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [screen, setScreen] = useState('')
  const [error, setError] = useState('')
  return (
    <>
      <div>
        <h1> Simple Calculator </h1>
        <h2> Link to repository: link</h2>
        <div className = "Screen">
        {screen}
        </div>
        <div> {error} </div>
        <div className = "Calculator">
          <button onClick = {() => { setScreen(str => str + '7')}}>7</button>
          <button onClick = {() => { setScreen(str => str + '8')}}>8</button>
          <button onClick = {() => { setScreen(str => str + '9')}}>9</button>
          <button onClick = {() => { setScreen(str => str + ' + ')}}>+</button>
          
          <button onClick = {() => { setScreen(str => str + '4')}}>4</button>
          <button onClick = {() => { setScreen(str => str + '5')}}>5</button>
          <button onClick = {() => { setScreen(str => str + '6')}}>6</button>
          <button onClick = {() => { setScreen(str => str + ' - ')}}>-</button>
          
          <button onClick = {() => { setScreen(str => str + '1')}}>1</button>
          <button onClick = {() => { setScreen(str => str + '2')}}>2</button>
          <button onClick = {() => { setScreen(str => str + '3')}}>3</button>
          <button onClick = {() => { setScreen(str => str + ' x ')}}>x</button>

          <button onClick = {() => { setScreen(str => str + '0')}}>0</button>
          <button onClick = {() => { setScreen(str => str + '.')}}>.</button>
          <button onClick = {() => { setScreen('')}}>AC</button>
          <button onClick = {() => { setScreen(str => str + ' / ')}}>/</button>
          
          <button onClick = {() => { setScreen(str => str + '(')}}>(</button>
          <button onClick = {() => { setScreen(str => str + ')')}}>)</button>
          <button onClick = {() => {
            try {
              let newVal = screen.toString()
              newVal = newVal.slice(0, newVal.length - 1)
              setScreen(newVal)
            } catch (error) {
              console.log(error)
            }
          
          }}>&#x2190;</button>
          
          <button style={{backgroundColor : 'green'}} onClick = {() => {
            try {
              let newVal = eval(screen.replace('x', '*').replace('(', '*('))
              // edge case what if *( -> **(
              setScreen(() => newVal)
              setError('')
            } catch (error) {
              console.log(error)
              setError('Please fix expression')
            }
            
            
          }}>=</button>
          

        </div>
      </div>
    </>
  )
}
// to do
// comments



export default App
