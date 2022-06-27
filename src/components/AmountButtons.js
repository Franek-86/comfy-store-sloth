import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

import { useCartContext } from '../context/cart_context'


const AmountButtons = ({stock, amount, setAmount, id}) => {
const  {toggleAmount} = useCartContext()




  const increase = ()=>{
    toggleAmount('inc', id, stock)
    setAmount((oldState)=>{
      let newState =  oldState + 1
      if(newState > stock){
        newState = stock
      }
      return newState
    })
  }
  const decrease = () =>{
toggleAmount('dec', id, stock)
    setAmount((oldState)=>{
      let newState =  oldState - 1
      if(newState <= 0){
        newState = 1
      }
      return newState
    })
  }

  return (
  <Wrapper className='amount-btns'>
<button className="amount-btn" onClick={decrease}><FaMinus/></button>
<h2 className="amount">{amount}</h2>
<button className="amount-btn" onClick={increase}><FaPlus/></button>
  </Wrapper>
  
    )
}


{/* <Wrapper  className='amount-btns'>
<button className="amount-btn"><FaMinus/></button>
<h2 className="amount">qui va l'amount</h2>
<button className="amount-btn"><FaPlus/></button>
</Wrapper> */}


const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center; 
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`


export default AmountButtons
