import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductItem from './Components/ProductItem'
import Cart from './Components/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Shopping Cart</h1>
      <ProductItem/>
      <Cart/>
    </>
  );
}

export default App
