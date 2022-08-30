import React, { useState,useContext,useReducer } from 'react';
import  {reducer} from "./reducer"

export const CounterContext = React.createContext();
const {Provider} = CounterContext

const CounterProvider = ({value=[],...props}) => {
  const [state, dispatch] = useReducer(reducer,{
    count:0,
    shoppingList:[{
      id:1,
      item:"cat treats"
    },{
      id:2,
      item:"kitty litter"
    }]
  })
  
  return (
    <Provider value={[state,dispatch]} >
        {props.children}
    </Provider>
  );
};
export const useCounter = () => useContext(CounterContext);

export default CounterProvider;
