import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className='page section section-center'>
<img src={aboutImg} alt="nice desk"/>
<article>
  <div className="title">
    <h2>our story</h2>
    <div className="underline"></div>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum quo obcaecati repudiandae accusamus ipsum, hic fugit dolor eveniet delectus quod officiis enim iusto nam earum dolorum, tempore explicabo culpa totam, molestias non? Facere, corporis? Eos consectetur unde debitis, quibusdam expedita, repellat quasi, eligendi dolor praesentium iure laboriosam rerum quia!</p>
</article>
      </Wrapper>
    </main>
  )
}

// main 
// qui va il PageHero component  
// Wrapper classe 'page section section-center'
// immagine importata su con testoalternativo di 'nice desk'
// article 
// div classe 'title'
// h2 - our story 
// div classe 'underline'
// /div 
// /div 
// p - lorem50 
// /article 
// /Wrapper
// /main 

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
