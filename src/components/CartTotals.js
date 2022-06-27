import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const {total_amount, shipping_fee} = useCartContext()
  const {isAuthenticated, loginWithRedirect} = useUserContext()
  return (
<Wrapper>
<div>
<article>
<h5>
  subtotal: <span>{formatPrice(total_amount)}</span>
</h5>
<p>
  shipping fee: <span>{formatPrice(shipping_fee)}</span>
</p>
<hr />
<h4>
  order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
</h4>
</article>
{isAuthenticated ? <Link to='/checkout' className='btn'>proceed to checkout</Link> : <button className='btn' onClick={loginWithRedirect}>login</button>}
</div>
</Wrapper>

  )
}

{/* <Wrapper>
  <div>
    <article>
      <h5>
        subtotal: <span>qui va il costo totale</span>
            </h5>
        <p>
          shipping fee : <span>qui va il costo di consegna</span>
        </p>
        <hr />
        <h4>
          order total : <span>qui va il total del costo piu la consegna</span>
        </h4>
    </article>
    quiva un Link alla pagina checkout, classe di 'btn' e testo di'proceed to checkout'.
    piu' tardi qui dovro fare in modo che se sono loggato vedro' il link di sopra, altrimenti un bottone con classe di 'btn' e testo di 'login'.
  </div>
</Wrapper> */}






const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
