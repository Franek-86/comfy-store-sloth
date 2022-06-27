import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'






// const prova = ()=>{
  
//   const test = localStorage.getItem('cart')
//   if(test){
//     const cart = JSON.parse(localStorage.getItem('cart'))
//     console.log(cart);
//     return cart
//   } else {
//     return []
//   }
// }
// console.log(prova());

const test = localStorage.getItem('cart')
const test3 = ()=>{
  if(test){
  const test2 = JSON.parse(localStorage.getItem('cart'))
  return test2
  } 
  if(!test){
    return []
  }
}





const initialState = {
cart: test3(),
shipping_fee: 535,
total_amount: 0,
total_items: 0
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer (reducer, initialState)



localStorage.setItem('cart', JSON.stringify(state.cart))





const test = localStorage.getItem('cart')
const test2 = JSON.parse(localStorage.getItem('cart'))



  
useEffect(()=>{
    dispatch({type: COUNT_CART_TOTALS})
},[])



const addToCart = (item, color, amount)=>{
  dispatch({type: ADD_TO_CART, payload: item, payload2: amount, payload3: color})
  dispatch({type: COUNT_CART_TOTALS})
}



const toggleAmount = (dir, id, stock)=>{

  dispatch({type: TOGGLE_CART_ITEM_AMOUNT, payload1: dir, payload2:id, payload3: stock})
  dispatch({type: COUNT_CART_TOTALS})
}

const clearCart = () =>{

  dispatch({type: CLEAR_CART })
   dispatch({type: COUNT_CART_TOTALS})
}

const removeItem = (id)=>{
dispatch({type: REMOVE_CART_ITEM, payload: id})
 dispatch({type: COUNT_CART_TOTALS})
}

  return (
    <CartContext.Provider value={{...state, addToCart, toggleAmount, clearCart, removeItem }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
