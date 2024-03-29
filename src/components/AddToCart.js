import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({colors, stock, product}) => {
const[mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)


const {addToCart} = useCartContext()


  return (
    <Wrapper>
      <div className="colors">
        <span>colors:</span>
      <div>
  {colors.map((i,index)=>{

    return <button key={index} className={i === mainColor ? 'color-btn active' : 'color-btn'} style={{backgroundColor: i}} onClick={()=>setMainColor(colors[index])}>{i === mainColor && <FaCheck/>}</button>
  
  })}
      </div>
      </div>
      <div className="btn-container">
        <AmountButtons stock={stock} amount={amount} setAmount= {setAmount} />
        <Link className='btn' to='/cart' onClick={()=>addToCart(product, mainColor, amount)}>add to cart</Link>
      </div>
    </Wrapper>
  )
}


{/* <Wrapper>
  <div className="colors">
    <span> colors: </span>
    <div>
      ...
      <button>
        - la classe sara' 'color-btn active' oppure solo 'color-btn'. 
        - i bottoni avranno il background color del valore del colore. 
        -  il contenuto del bottone sara' il component FaCheck ma solo a dederminate condizioni. 
      </button>
    </div>
  </div>
  <div className="btn-container">
    <AmountButtons/>
    - LINK to cart page con testo di 'add to cart'
  </div>
</Wrapper> */}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
