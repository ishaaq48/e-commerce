import { createRoot } from 'react-dom/client'
import { 
  Route,
  BrowserRouter,
  Routes
  } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
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
import AdminRoute from './components/AdminRoute.jsx'
import PaymentScreen from './Screen/PaymentScreen.jsx'
import PlaceOrderScreen from './Screen/PlaceOrderScreen.jsx'
import OrderScreen from './Screen/OrderScreen.jsx'
import ProfileScreen from './Screen/ProfileScreen.jsx'
import OrderListScreen from './Screen/admin/OrderListScreen.jsx'
import ProductListScreen from './Screen/admin/ProductListScreen.jsx'
import ProductEditScreen from './Screen/admin/ProductEditScreen.jsx'

createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider deferLoading={true}>
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
               <Route path='/profile' element={<ProfileScreen />} />
            </Route>

            <Route path='' element={<AdminRoute />} >
               <Route path='/admin/orderlist' element={<OrderListScreen />} />
               <Route path='/admin/productlist' element={<ProductListScreen />} />
               <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
            </Route>

          </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  </PayPalScriptProvider>
)
