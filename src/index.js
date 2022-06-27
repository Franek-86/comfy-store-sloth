import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'


// Domain = dev-plyhjp0a.us.auth0.com
// Client ID = ktRHgZcBd86LjxBsfTHwDGjeNY1SsyGv
// Client Secret = jVY6hYpzc-NKfwRkEd6Ns0UVHzAUpx1G2aCQ19YiwcU26NoYer10Jn54PXSvBysI

const clientID = process.env.REACT_APP_CLIENT_ID

ReactDOM.render(
  <Auth0Provider
    domain="dev-plyhjp0a.us.auth0.com"
    clientId= {clientID}
    redirectUri={window.location.origin}
  >
   < UserProvider >
 <ProductsProvider>
 <FilterProvider>
  <CartProvider>
<App />
</CartProvider>
</FilterProvider>
</ProductsProvider>
</UserProvider>
</Auth0Provider>
, document.getElementById('root'))
