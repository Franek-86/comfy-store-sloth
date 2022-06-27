import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'





const Filters = () => {
  const {all_products, updateFilters, clearFilters} = useFilterContext()
  const {filters:{text, company, colors: colore, category, shipping, max_price, price }} = useFilterContext()
  


  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')


  return (
  <Wrapper>
    <div className="content">
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className="form-control">
          <input name='text' value={text} onChange={updateFilters} type="text" className='search-input' placeholder='search'/>
        </div>

<div className="form-control">
  <h5>category</h5>
  <div>
     <button className={category === 'all' ? 'active' : null} onClick={updateFilters} name="category">all</button>
    {categories.map((i, index)=>{
      return <button className={i===category ? 'active' : null} onClick={updateFilters} name="category"  key={index}>{i}</button>
    })}
  </div>
</div>

<div className="form-control">
  <h5>company</h5>
  <select  onChange={updateFilters} className='company' name="company" value={company}>
   <option name="company" value='all'>all</option>
    {companies.map((i, index)=>{
      return <option name="company "key={index} value={i}>{i}</option>
    })}
  </select>
</div>


<div className="form-control">
  <h5>colors</h5>
  <div className="colors">
<button onClick={updateFilters} name='colors' data-id='all' className={colore === 'all' ? 'all-btn active' : 'all-btn'}>all</button>
 {colors.map((i, index)=>{
   return <button name='colors' className={i === colore ? 'color-btn active' : 'color-btn'} onClick={updateFilters}  data-id={i} key={index} style={{background: i}} >{i === colore && <FaCheck/>}</button>
 })}
 </div>
</div>



<div className="form-control">
  <h5>price</h5>
<p className="price">
  {formatPrice(price)}
</p>
<input name='price' type="range" min='0' max={max_price} value={price} onChange={updateFilters} />
</div>


<div className="form-control shipping">
  <label htmlFor="shipping">free shipping</label>
  <input name='shipping' type="checkbox" onChange={updateFilters} checked={shipping} />
</div>


      </form>

      <button className="clear-btn" onClick={clearFilters}>clear filters</button>
    </div>
  </Wrapper>
  
    )
}

{/* <Wrapper>
  <div className="content">
    <form>
      <div className="form-control">
        <input type="text" />
      </div>
}

{/* <div className="form-control">
  <h5>category</h5>
  <div>
    ... 
bottoni con classe di active o nessuna classe.
il testo sara' la  categoria.
  </div>
</div> */}

{/* <div className="form-control">
  <h5>company</h5>
  <select>
    ...
    <option value="">...</option>
    </select>
</div> */}


{/* <div className="form-control">
  <h5>colors</h5>
  <div className="colors">
    ... 
se color e' all 
bottone con classe di 'all-btn' oppure di 'all-btn active'
il testo del bottone sara' 'all'
altrimenti
bottone con classe di 'color-btn' o 'color-btn active'
background inline style sara' il colore.
testo sara'o null o l'icona importata su di FaCheck. 

  </div>
</div> 


<div className="form-control">
  <h5>price</h5>
  <p className="price">qui va il prezzo nel formato prezzo</p>
  <input/>
</div> 


<div className="form-control shipping">
  <label htmlFor="">free shipping</label>
  <input/>
</div>

    </form>


<button className="clear-btn">clear filters</button>


  </div>
</Wrapper> */}




const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
