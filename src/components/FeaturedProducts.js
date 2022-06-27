import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
const {isSidebarOpen, product_loading:loading, products_error: error, featured_products: products} = useProductsContext()


if (loading){
  return <Loading/>
}
  
if (error){
  return <Error/>
}
return (
<Wrapper className='section'>
<div className="title">
<h2>featured products</h2>
<div className="underline"></div>
</div>
<div className="section-center featured">
{products.slice(0,3).map((i)=>{

  return <Product key={i.id} {...i}/>
})}
</div>
<Link className='btn' to='/products'>all products</Link>
</Wrapper>
)
  
}

// se sto facendo il loading voglio il Loading component 
// se ho un errore Error
// altrimenti Product ma in questo caso vedi giu

// wrapper.section 
// .title 
// h2 - featured products 
// .underline /div 
// /div 
// .section-center featured 
// ...
// /div 
// qui va un Link che manda alla pagina products, classedi 'btn' e testo di 'all products'
// /wrapper  




//da qui vai anche al 'error', 'loading' e 'product' component. 

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
