import React from 'react'
import "./style.css"
import Fourth from "../Fourth"
import { useCounter } from '../../utils/CounterContext'
import { DECREMENT,RESET } from '../../utils/actions'

export default function Third(props) {
  const [state,dispatch] = useCounter()
  
  return (
    <div className="Third"><h3>Third</h3>
      <button onClick={()=>{
        dispatch({
          type:DECREMENT
        })
      }}>decrement</button>
      <button onClick={()=>{
        dispatch({
          type:RESET
        })
      }}>reset</button>
       <Fourth />
    </div>
  )
}
