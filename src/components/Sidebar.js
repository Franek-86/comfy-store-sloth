import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'


const Sidebar = () => {
 const {isAuthenticated}  = useUserContext()
  const {isSidebarOpen, closeSidebar} = useProductsContext()
  // const [isSidebarOpen, setisSidebarOpen] = React.useState(false)
  return (

    <SidebarContainer>

<aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>

  <div className="sidebar-header">
    <img src={logo} alt="comfy slot" className="logo" />
    <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
  </div>
  <ul className="links">
{links.map((i)=>{
  const {id, text, url} = i
  return <li key={id}>
    <a href={url}>{text}</a>
  </li>
})}
{isAuthenticated && <li><a href='/checkout'>checkout</a></li>}
  </ul>
  <CartButtons/>
</aside>
    </SidebarContainer>
  )
}
// - crea una costante boolean temporanea (serve per mostrare o meno la Sidebar che qui in basso riporto). E' temporanea perche' la spostero' sul context.

// SidebarContainer
// aside - avra' classe di 'sidebar' e 'show-sidebar' se la costante di sopra sara' true (inizialmente la posso cambiare solo manualmente) oppure solo di 'sidebar' se la costante e' false.
// div.sidebar-header 
// immagine del logo con classe di 'logo' e testo alternativo di  'comfy sloth'
// bottone con classe di 'close-btn' rappresentato dall'icona importata.
// /div
// unordered list classe 'links'
// itera tra i links (gia importati su) e per ognuno riporta il LINK
// finito di iterare aggiiungi un altro list item in basso con il LINK per il 'checkout', il testo sara' checkout e il path '/checkout', eventualmente sara' dynamic ma per ora lo aggiunge cosi e basta. Quando lo rendero' dynimic fara' in modo che il link sia visibile solo quando sono loggato.
// /unorderedlist
// aggoiungi cart Component
// /aside
// /SidebarContainer

















const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
