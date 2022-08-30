import React, { useReducer } from 'react'
import "./style.css"
import Third from "../Third"
import { useCounter } from '../../utils/CounterContext'
import { reducer } from '../../utils/reducer'
import { INCREMENT } from '../../utils/actions'

export default function Second(props) {
  const [state, dispatch] = useCounter()
  const increment = ()=>{
    console.log("incrementing!")
    dispatch({
      type:INCREMENT
    })
}

  return (
    <div className="Second"><h3>Second</h3>
    <button onClick={increment}>Increment</button>
      <h1>current value: {state.count}</h1>
       <Third />
    </div>
  )
}
