import React from 'react'
import "./style.css"
import Fifth from "../Fifth"
import { useCounter } from '../../utils/CounterContext'
import { REMOVE_SHOPPING_ITEM } from '../../utils/actions'

export default function Fourth(props) {
  const [state,dispatch] = useCounter()
  return (
    <div className="Fourth"><h3>Fourth</h3>
     <h3>shopping list:</h3>
        <ul>
          {state.shoppingList.map(item=><li key={item.id}>
            {item.item}
            <button onClick={()=>{
              dispatch({
                type:REMOVE_SHOPPING_ITEM,
                payload:{
                  id:item.id
                }
              })
            }}>delete</button>
          </li>)}
        </ul>
       <Fifth />
    </div>
  )
}
