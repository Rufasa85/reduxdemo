import { INCREMENT,DECREMENT,RESET, ADD_SHOPPING_ITEM, REMOVE_SHOPPING_ITEM } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT: {
        return {
          ...state,
          count:state.count+1
        };
      }
      case DECREMENT: {
        return {
            ...state,
            count:state.count-1
          };
      }
      case RESET: {
        return {
            ...state,
            count:0
          };
      }
      case ADD_SHOPPING_ITEM: {
        const newItem ={
          id:state.shoppingList.length?state.shoppingList[state.shoppingList.length-1].id+1:1,
          item:action.payload.item
        }
        return {
          ...state,
          shoppingList:[...state.shoppingList,newItem]
        }
      }
      case REMOVE_SHOPPING_ITEM:{
        return {
          ...state,
          shoppingList:state.shoppingList.filter(item=>item.id!==action.payload.id)
        }
      }
      default: {
        return state;
      }
    }
  };
  