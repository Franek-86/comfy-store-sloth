import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
const Sort = () => {
  const {setGridView, setListView, grid_view, sort, updateSort, filtered_products:products} = useFilterContext()
  return (
  <Wrapper>
    <div className="btn-container">
      <button className={grid_view ? 'active' : null} onClick={setGridView}>
        <BsFillGridFill/>
      </button>
      <button className={!grid_view ? 'active' : null} onClick={setListView}><BsList/></button>
    </div>
    <p>{products.length} products found</p>
    <hr />
    <form  action="">
      <label htmlFor="sort">sort by</label>
      <select value={sort} onChange={updateSort} name="sort" id="sort" className="sort-input">
        <option value="price-lowest">price (lowest)</option>
        <option value="price-highest">price (highest)</option>
        <option value="name-a">name (a-z)</option>
        <option value="name-z">name (z-a)</option>
      </select>
    </form>
  </Wrapper>
  
  
    )
}
{/* <Wrapper>
  <div className="btn-container">
    <button avra' classe di 'active' se ho il grid view altrimenti nessuna classe>
      <BsFillGridFill/>
    </button>
    <button avra' classe di 'active' se non ho il grid view altrimenti nessuna classe>
      <BsList/>
    </button>
  </div>
  <p>qui va prima il numero dei prodotti che ho in array seguito da un testo di 'products found'</p>
  <hr />
  <form>
    <label htmlFor="">sort by</label>
    <select name="" id="" className="sort-input">
      <option value="">price (lowest)</option>
      <option value="">price (highest)</option>
      <option value="">name (a-z)</option>
      <option value="">name (z-a)</option>
    </select>
  </form>
</Wrapper> */}



const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
