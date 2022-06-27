import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
isSidebarOpen: false,
products_loading:false,
products_error: false,
products: [],
featured_products:[],
single_product_loading: false,
single_product_error: false,
single_product:{}
}


const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState)

const openSidebar =()=>{
  dispatch({type: SIDEBAR_OPEN})
}
const closeSidebar =()=>{
  dispatch({type:  SIDEBAR_CLOSE})
}

const fetchProducts = async (url)=>{
dispatch([{type: GET_PRODUCTS_BEGIN}])
try{
  const response = await axios(url)
  const products = response.data
  dispatch({type: GET_PRODUCTS_SUCCESS, payload: products })
} catch (error){
  dispatch({type:  GET_PRODUCTS_ERROR })
}

}

const fetchSingleProduct= async (url)=>{
dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
try{
  const response = await axios(url)
  const products = response.data
  dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: products })
} catch (error){
  dispatch({type:   GET_SINGLE_PRODUCT_ERROR })
}
}


useEffect(()=>{
  fetchProducts(url)
},[])


  return (
<ProductsContext.Provider value={{...state, openSidebar, closeSidebar, fetchSingleProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}

// 1
// - toggling della sidebar attraverso due separate functions, ognuna avra' una sua action to dispatch che verra' processata nel reducer importato sopra per i products. Una volta finito dovro' tornare sulla sidebar ma anche sul CartButtons e sul Nav perche' voglio per ora che quando clicco sulle bars apro il sidebar e quando clicco sulla x chiudo la sidebar. Voglio anche ogni volta che clicco su ciascun link che sta nella sidebar lasidebar dopo si chiude.



// 2
// in utils/constants avro' gli API, posso ora cominciare a fare il fetching (usa axios) dell'url importato sopra, lo faccio con una funzione che will run ogni volta che rendero questo component (solo il primo rendering)