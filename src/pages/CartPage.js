import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const {cart, amount} = useCartContext()
  if(cart.length <= 0){
      return (
<Wrapper className='page-100'>
<div className="empty">
  <h2>your cart is empty</h2>
  <Link className='btn' to='/products'>fill it</Link>

</div>
</Wrapper>

      )
    }
    if(cart.length > 0){
return (
<main>
<PageHero title='cart'/>
<Wrapper className='page'>
<CartContent/>
</Wrapper>
</main>

)
    }


  
}

// if the cart is empty 

// <Wrapper className='page-100'>
// <div className="empty">
//   <h2>your cart is empty</h2>
//   LINK with class of 'btn' to products page, text of the linkis 'fill it'
// </div>
// </Wrapper>

// if cart is not empty  

// <main>
//   <PageHero/>
//   <Wrapper className='page'>
//     <CartContent/>
//   </Wrapper>
// </main>



const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
