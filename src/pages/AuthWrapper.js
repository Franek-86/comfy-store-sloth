import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({children}) => {

  const {isLoading, error} = useAuth0()


if(isLoading){
  return (
<Wrapper>
  <h1>Loading...</h1>
</Wrapper>
  )
}
if(error){
<Wrapper>
{error.message}
</Wrapper>
}
else {
  return <>{children}</>
}
}



// se sto facendo il loading:

//   <Wrapper>
//     <h1>Loading...</h1>
//   </Wrapper>

// se ho un errore:

//   <Wrapper>
//     <h1>qui va il messaggio di errore</h1>
//   </Wrapper>

// altrimenti il resto.




const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
