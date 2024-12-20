import { createRoot } from 'react-dom/client'
import { 
  Route,
  BrowserRouter,
  Routes
  } from 'react-router-dom'
import './assets/bootstrap.custom.css'
import './assets/index.css'

import App from './App.jsx'
import HomeScreen from './Screen/HomeScreen.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<App />}>
        <Route index path='/' element={<HomeScreen />} />
      </Route>
  </Routes>
  </BrowserRouter>
)
