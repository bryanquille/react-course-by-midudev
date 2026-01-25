import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ItemsProvider from './context/ItemsProvider.tsx'
import FiltersProvider from './context/FiltersProvider.tsx'
import CartProvider from './context/CartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ItemsProvider>
    <FiltersProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FiltersProvider>
  </ItemsProvider>,
)
