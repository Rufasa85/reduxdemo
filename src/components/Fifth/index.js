import React, { useContext,useState } from 'react'
import "./style.css"
import { useCounter} from "../../utils/CounterContext"
import { ADD_SHOPPING_ITEM, INCREMENT } from '../../utils/actions'

export default function Fifth(props) {
  const [item,setItem] = useState("")
  const [state,dispatch] =useCounter()
  return (
    <div className="Fifth">
      <h3>Fifth</h3>
       <h3>Current count = {state.count}</h3>
      <button onClick={()=>{
        dispatch({
          type: INCREMENT
        })
      }}>increment</button> 
      <form onSubmit={e=>{
        e.preventDefault()
        dispatch({
          type:ADD_SHOPPING_ITEM,
          payload:{
            item
          }
        })
        setItem("")
      }}>
        <input value={item} onChange={e=>setItem(e.target.value)}/>
        <button>Add to List</button>
      </form>
      </div>
  )
}
