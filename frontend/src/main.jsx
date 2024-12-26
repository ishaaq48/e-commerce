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
import CartScreen from './Screen/cartScreen.jsx'
import LoginScreen from './Screen/LoginScreen.jsx'
import RegisterScreen from './Screen/RegisterScreen.jsx'
import ShippingScreen from './Screen/ShippingScreen.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import PaymentScreen from './Screen/PaymentScreen.jsx'
import PlaceOrderScreen from './Screen/PlaceOrderScreen.jsx'
import OrderScreen from './Screen/OrderScreen.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route index path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/auth' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
           
            <Route path='' element={<PrivateRoute />} >
               <Route path='/shipping' element={<ShippingScreen />} />
               <Route path='/payment' element={<PaymentScreen />} />
               <Route path='/placeorder' element={<PlaceOrderScreen />} />
               <Route path='/order/:id' element={<OrderScreen />} />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
