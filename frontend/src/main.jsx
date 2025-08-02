import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

import Home from './components/Home/Home.jsx'
import Collection from './components/Collection/Collection.jsx'
import Contact from './components/Contact/Contact.jsx'
import Product from './components/Product/Product.jsx'
import About from './components/About/About.jsx'
import Cart from './components/Cart/Cart.jsx'
import Login from './components/Login/Login.jsx'
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx'
import Orders from './components/Orders/Orders.jsx'
import Layout from './components/LayOut/Layout.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import ChatGPTPage from './pages/ChatGPTPage.jsx'
import EmotionDetector from './components/Emotion/EmotionDetector.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'collection', element: <Collection /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'product/:productId', element: <Product /> },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Login /> },
      { path: 'place-order', element: <PlaceOrder /> },
      { path: 'orders', element: <Orders /> },
      { path: 'chat', element: <ChatGPTPage /> },
      { path: 'emotion', element: <EmotionDetector /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </StrictMode>
)
