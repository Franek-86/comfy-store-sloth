import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars, FaSolarPanel } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const {isSidebarOpen, openSidebar, closeSidebar}= useProductsContext()
  const {isAuthenticated} = useUserContext()

  return (
  <NavContainer>
<div className="nav-center">
  <div className="nav-header">
    <a href='/'><img src={logo} alt="comfy slot" /></a>
<button className="nav-toggle" onClick={openSidebar}><FaBars/></button>
  </div>
<ul className="nav-links">
 {links.map((i)=> {
    const {id, text, url} = i
    return <li key={id}><Link to={url}>{text}</Link></li>
  })}
  {isAuthenticated && <li><Link to='/checkout'>checkout</Link></li>}
</ul>
{<CartButtons/>}
</div>
</NavContainer> 
  )
}


{/* <NavContainer>
<div className="navcenter">
  <div className="nav-header">
    - qui va il logo (alternative name di 'comfy slot) che e' anche un LINK alla home page.
- qui va la bars icon che e' un BOTTONE con classe di 'nav-toggle'.
  </div>

- unordered list con classe di 'nav-links' e poi itera tra i link e riporta un LINK con l'url e il text su cui cliccare
-qui va il CartButtons component
</div>
</NavContainer> */}


// Nella unordered list di sopra piu' tardi dovro' aggiungeren in coda un altro LINK to the checkout page con testo di 'checkout' da mostrare solo quando sono gia' loggato.

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
