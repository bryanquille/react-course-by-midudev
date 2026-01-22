import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ItemsProvider from './context/ItemsProvider.tsx'
import FiltersProvider from './context/FiltersProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ItemsProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ItemsProvider>,
)
