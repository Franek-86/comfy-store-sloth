import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_products: products, grid_view} = useFilterContext()


if(products.length <= 0 ){
return <h5>Sorry, no products matched your search</h5>
}
if(products.length >= 0){
  if(grid_view){
    return <GridView products={products}/>
  }
  if(!grid_view){
    return <ListView products={products}/>
  }
  } 

}
  





  

// se non ho prodotti nell'array:
// <h5>sara' un testo non capitalized di 'Sorry, no products matched your search</h5>
// se ho prodotti e non voglio la la gridWiew:
// <ListWiew/>
// se ho prodotti e voglio la grid view:
// <GridView/>




export default ProductList


  // filtered_products:[],
  // all_products:[],
  // grid_view: true,