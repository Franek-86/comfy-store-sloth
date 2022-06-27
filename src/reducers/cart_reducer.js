import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'


const cart_reducer = (state, action) => {


if(action.type === ADD_TO_CART){ 

const { id: sku, stock: max, name, images, price} = action.payload
const color = action.payload3
const amount = action.payload2
const id = sku + color
const test = { amount, color, id, max, name, images: images[0].url, price}

const test2 = state.cart.find((item)=>{
  return item.id === test.id
})

if(test2){
state.cart.map((item)=>{
if(item.id === id){

let newAmount = item.amount + amount
if(newAmount > max){
  newAmount = max
}
return item.amount = newAmount
} 
if(item.id !== id){
    return item
  } 
  })
}

if(!test2){
const newItem = { amount, color, id, max, name, images: images[0].url, price}
return {...state, cart:[...state.cart, newItem]}
}
return state
}




if(action.type === COUNT_CART_TOTALS){


const {total_items, total_amount} = state.cart.reduce((total, acc)=>{
total.total_items += acc.amount
total.total_amount += acc.amount * acc.price

return total
}, {total_items: 0, total_amount:0})


return {...state, total_items, total_amount }



}


if(action.type === TOGGLE_CART_ITEM_AMOUNT){

let dir = action.payload1
let id = action.payload2
let stock = action.payload3

if(id){
state.cart.map((i)=>{
if(i.id === id){

  if(dir === 'inc'){

let newAmount = i.amount + 1

    if(newAmount > stock){
      newAmount = stock
    }
  
    return i.amount = newAmount

  }
  if(dir === 'dec'){
let newAmount = i.amount - 1
  if(newAmount <= 0){
      newAmount = 1
    }
    return i.amount = newAmount
  }

} 
if(i.id !== id){
  return i
}
  
})


}

return state

}

if(action.type === CLEAR_CART){


return {...state, cart:[]}

}

if(action.type ===  REMOVE_CART_ITEM){
  const id = action.payload
  console.log(id);
const items = state.cart.filter((i)=>{
  return i.id !== id
})
  return {...state, cart: items}
}

return state

throw new Error(`No Matching "${action.type}" - action type`)

}



















// if(!newItem){

// const { id: sku, stock: max, name, images, price} = action.payload
// const color = action.payload3
// const amount = action.payload2
// const id = sku + color

// const newItem = { amount, color, id, max, name, images: images[0].url, price}
  
// return {...state, cart:[...state.cart, newItem]}

// }

// if(state.cart.newItem){
// console.log(1);
//   state.cart.map((item)=>{
//     if(item === state.cart.newItem){
//       let newAmount = item.amount + amount
//       return {...item, amount: newAmount}
//   }

//   if(item !== state.cart.newItem){
//     return item
//   }
//   })
// }











  // cus return {...state, cart:[...state.cart, newItem]} 





  // if(newItem){
  //   return {...state, cart: [...state.cart, newItem]}
  // }
  // if(!newItem){
  // const newItem = {
  //   amount: '',
  //   color:'',
  //   id: '',
  //   image:'',
  //   max:'',
  //   name:'',
  //   price:''
  // }

  // return {...state, cart: [newItem]}
  // }



  
 
  



export default cart_reducer
