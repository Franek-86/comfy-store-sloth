import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'




const CartButtons = () => {
  const {total_items} = useCartContext()
    const {loginWithRedirect, isAuthenticated, logout } = useUserContext()


  return (
  
<Wrapper className='cart-btn-wrapper'>

  <a href='/cart' className='cart-btn'>Cart<span className="cart-container"><FaShoppingCart/><span className="cart-value">{total_items}</span></span></a>
{!isAuthenticated ? <button className='auth-btn' onClick={() => loginWithRedirect()}>Login<FaUserPlus/></button> :  <button className='auth-btn' onClick={() => logout({ returnTo: window.location.origin })}>
      Logout <FaUserMinus/>
    </button> }
</Wrapper> 
  )
}



// import React from "react";ß
// import { useAuth0 } from "@auth0/auth0-react";

// const LogoutButton = () => {
//   const { logout } = useAuth0();

//   return (
//     <button onClick={() => logout({ returnTo: window.location.origin })}>
//       Log Out
//     </button>
//   );
// };

// export default LogoutButton;


{/* <Wrapper className='cart-btn-wrapper'>
- qui va un LINK con classe di 'cart-btn' che manda alla cart page. Il link avra' un testo di 'cart'. dopo il testo di 'cart' va uno span con classe di 'cart-container', nello span ci metto l'icona della shopping cart. Lo span avra' un'altro span al suo interno (dopo l'icona) con classe di 'cart-value' ed un testo che inizialmente mettiamo a mano di '12'. Ora chiudi il LINK.
- qui va un BOTTONE con calsse di 'auth-btn' e dentro testo di 'Login' seguito dall'icona che almeno inizialmente sara' di userplus. Ora chiudi il BOTTONE
</Wrapper> */}

// - poi andra' anche un altro BOTTONE (sempre nel Wrapper) con calsse di 'auth-btn' e dentro testo di 'Logout' seguito dall'icona che sara' di userplus. Questo bottone ci sara' solo se non saro' gia' loggato. Il bottone di prima (login) non ci sara' invece quando saro' gia' loggato.






const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
