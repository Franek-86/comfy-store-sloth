import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const {id} = useParams()
  const{single_product_loading: loading, single_product_error: error, fetchSingleProduct, single_product: product}= useProductsContext()

useEffect(()=>{
  fetchSingleProduct(`${url}${id}`)
},[])


if(loading){
  return <Loading/>
}
if(error){
  return <Error/>
} 
const {name, price, stars, colors, reviews, description, id:sku, company, images, stock} = product


return (
<Wrapper>
<PageHero title='Products' product name={name} />
<div className="section section-center page">
<Link className='btn' to='/products'>back to products</Link>
<div className="product-center">
  <ProductImages images={images}/>
  <section className="content">
    <h2>{name}</h2>
    <Stars stars={stars} reviews={reviews}/>
    <h5 className='price'>{formatPrice(product.price)}</h5>
    <p className="desc">{product.description}</p>
    <p className="info">
      <span>available: </span>{product.stock > 0 ? 'in stock' : 'out of stock'}
    </p>
    <p className="info">
      <span>SKU:</span> {sku}
    </p>
    <p className="info">
      <span>Brand:</span> {company}
    </p>
    <hr />
{ stock > 0 && <AddToCart colors={colors} stock={stock} product={product}/>}
  </section>
</div>
</div>
</Wrapper>
)
}


// se sto facendo il loading voglio mostrare il component Loading se ho un errore Error 
// altrimenti...

// wrapper 
// PageHero 
// .section section-center page 
// LINK classe 'btn' che manda alla pagina products con test di 'back to products'
// .product-center 
// ProductImages 
// section.content 
// h2 - qui va il nome del single product 
// Stars 
// h5.price - qui va il prezzo del prodotto formattato 
// p.desc - qui va la description 
// p.info 
// span - available: /span se lo stock value e' maggiore di 0 'in stock' altrimenti voglio 'out of stock'
// /p 
// p.info 
// span - SKU: /span qui va l'id del prodotto a cui avro' dato un alias di sku 
// /p 
// p.info 
// span - Brand: /span qui va il nome della company 
// /p 
// horizzontal line  
// se lo stock e' maggiore di 0 qui va  AddToCart altrimenti nulla 
// /section 
// /div 
// /div 
// /wrapper 


const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
