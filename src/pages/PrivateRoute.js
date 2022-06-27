import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children}) => {
  const {isAuthenticated} = useUserContext()

if(isAuthenticated){

return children
}

if(!isAuthenticated){
  return <Navigate replace to="/" />
}









  
};
export default PrivateRoute;


// http://localhost:3000/checkout





// if(isAuthenticated){
//   return children 
// }
// if (!isAuthenticated){
//   return <Navigate to='/'></Navigate>
// }


// la pagina checkout la voglio private, se provo ad accedervi senza essere loggato dovro' andare alla home. 

