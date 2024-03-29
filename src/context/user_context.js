import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0()


  return (
<UserContext.Provider value={{loginWithRedirect, isAuthenticated, logout, user, isLoading}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
