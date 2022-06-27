import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars, reviews}) => {


  let test = Array.from({length:5}, (_, index) =>{
    let prova = index + 0.5

  return <span key={index}>{stars >= prova ? <BsStarFill/> : stars > index ? <BsStarHalf/> : <BsStar/>}
</span>

  })

  return (
  <Wrapper>
<div className="stars">
{test}
</div>
<p className="reviews">({reviews} customer reviews)</p>
</Wrapper>
    )
}




















// 1. manual approach for the stars 
// <Wrapper>
//   <div className="stars">
//     <span>
//       se il valore delle stars e' maggiore o uguale a 1 l'icona sara' starsfill  altrimenti se e' maggiore o uguale a 0.5  voglio l'halfstar altrimenti voglio il bsstar 
//     </span>
//       --
//     <span>
//       se il valore delle stars e' maggiore o uguale a 2 l'icona sara' starsfill  altrimenti se e' maggiore o uguale a 1.5  voglio l'halfstar altrimenti voglio il bsstar \
//     </span>
//       --
//        <span>
//       se il valore delle stars e' maggiore o uguale a 3 l'icona sara' starsfill  altrimenti se e' maggiore o uguale a 2.5  voglio l'halfstar altrimenti voglio il bsstar 
//        </span>
//       --
//           <span>
//       se il valore delle stars e' maggiore o uguale a 4 l'icona sara' starsfill  altrimenti se e' maggiore o uguale a 3.5  voglio l'halfstar altrimenti voglio il bsstar 
//       </span>
//       --
//         <span>
//       se il valore delle stars e' uguale a 5 l'icona sara' starsfill  altrimenti se e' maggiore o uguale a 4.5  voglio l'halfstar altrimenti voglio il bsstar 
//          </span>
//       --
//         </div>
//           <p className="reviews">quivanno le reviews e poi 'customer reviews'</p>

// </Wrapper>

// 2. array approach for the stars  using array from 

// ...     
// <span>
// ...
// </span>

// ...
// <Wrapper>
// <div className="stars">
// ...
// </div>
//   <p className="reviews">quivanno le reviews e poi 'customer reviews'</p>
// </Wrapper>





const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
