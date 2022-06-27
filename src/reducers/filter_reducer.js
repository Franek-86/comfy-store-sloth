import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { links } from '../utils/constants'
import products_reducer from './products_reducer'

const filter_reducer = (state, action) => {




 

  if(action.type === LOAD_PRODUCTS){
let tempProducts = [...action.payload]
let test = tempProducts.map((i)=>{return i.price})
test = Math.max(...test)


    return {...state, all_products: action.payload, filtered_products: tempProducts, filters: {...state.filters, max_price: test, price: test}}
  }
  if(action.type === SET_GRIDVIEW){
    return {...state, grid_view: true}
  }
  if(action.type === SET_LISTVIEW){
    return {...state, grid_view: false}
  }
  if(action.type === UPDATE_SORT){

    return {...state, sort: action.payload}
  }

    if(action.type === UPDATE_FILTERS){
    const {value, name} = action.payload

    return {...state, filters:{...state.filters, [name]: value } }
  }  

  if(action.type === SORT_PRODUCTS){
    let tempTest = [...state.filtered_products]
  
    

    if(state.sort === "price-lowest"){
    
tempTest = tempTest.sort((a,b)=> a.price- b.price)
 


}
    if(state.sort === "price-highest"){
tempTest = tempTest.sort((a,b)=> b.price- a.price)

}
    if(state.sort === "name-a"){
tempTest = tempTest.sort((a,b)=> { return a.name.localeCompare(b.name)})

}
    if(state.sort === "name-z"){
tempTest = tempTest.sort((a,b)=> { return b.name.localeCompare(a.name)})

}

 return {...state, filtered_products: tempTest}

  }







  if(action.type === FILTER_PRODUCTS){
  
    const {text, company, category, colors, min_price, max_price, price, shipping} = action.payload
 let tempTest = [...state.filtered_products]
if(text){
tempTest  = tempTest.filter((i)=>{return i.name.startsWith(text)})

}
if(category!== 'all'){
tempTest = [...state.all_products]
tempTest  = tempTest.filter((i)=>{return i.category === category})



}
if(company!== 'all'){

tempTest  = tempTest.filter((i)=>{return i.company === company})

}
if(colors!== 'all'){

  tempTest  = tempTest.filter((i)=>{ return i.colors.find((i)=>{return i === colors})})
  

}

tempTest  = tempTest.filter((i)=>{return i.price <= price })

if(shipping){
  tempTest = tempTest.filter((i)=>{return i.shipping === true})

}
// if (!shipping){
//  tempTest = tempTest.map((i)=>{
// let u = i.shipping || i 
// return u
//   }).filter((u)=>{return u !== true })

// }


return {...state, filtered_products: tempTest }


}  
  


  if(action.type === CLEAR_FILTERS){
 
    return {...state,
      filtered_products: state.all_products,
      filters: {
      ...state.filters,
    text:'',
    company:'all',
    category:'all',
    colors:'all',
    price: state.filters.max_price,
    shipping: false
  } }
  }  
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
