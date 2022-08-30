import React, { useContext } from 'react'
import "./style.css"
import Second from "../Second"
import { useCounter } from '../../utils/CounterContext'

export default function First() {
  const [state]= useCounter()
  console.log(state)
  return (
    <div className= "First">
        <h3>
        First
        currentCount = {state.count}
        </h3>
       
        <Second/>
        </div>
  )
}
