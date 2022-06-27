import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title, product, name}) => {

  return (
    <Wrapper>
      <div className="section-center">
        <h3><Link to='/'>home /</Link>{product ? <Link to='/Products'>{title}</Link>: title} {product && `/ ${name}`}</h3>
      </div>
    </Wrapper>
  )
}

// prova una cosa simile {product && <Link to={title}>}
// wrapper 
// div classe 'section-center'
// h3 - qui va il LINK che manda alla Home (con il testo di home) e accanto alla scritta home va il nome della pagina su cui mi trovo
// /div
// /wrapper


const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
