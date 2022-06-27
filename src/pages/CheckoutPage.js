import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
const {cart} = useCartContext()

  return (

<main>
<PageHero title='checkout'/>
<Wrapper className="page">
{cart.length <= 0 ? <div className="empty">
  <h2>your card is empty</h2>
  <Link className='btn' to='/products'>fill it</Link>
  </div> : <StripeCheckout/>} 
</Wrapper>

</main>

  )
}


// /main 
// qui va il PageHero component 
// wrapper classe 'page'
// h1 - checkout here
// /wrapper




// ...piu' tardi, cancella quello che sta sopra e cosidero solo quello che sta in basso.

{/* <main>
  <pageHero>
    <Wrapper className='page'>
se ho il carrello vuoto 
<div className="empty">
  <h2>your card is empty</h2>
  Link to products page with class name of 'btn' e testo di 'fill it'
</div>
altrimenti <StripeCheckout/>
    </Wrapper>
  </pageHero>
</main> */}


const Wrapper = styled.div``
export default CheckoutPage
