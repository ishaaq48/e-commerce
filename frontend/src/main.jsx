import { createRoot } from 'react-dom/client'
import { 
  Route,
  BrowserRouter,
  Routes
  } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.jsx' 
import './assets/bootstrap.custom.css'
import './assets/index.css'
import App from './App.jsx'
import HomeScreen from './Screen/HomeScreen.jsx'
import ProductScreen from './Screen/ProductScreen.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route index path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
