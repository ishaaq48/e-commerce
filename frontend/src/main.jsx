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
import HomeScreen from './screen/HomeScreen.jsx'
import ProductScreen from './screen/ProductScreen.jsx'
import CartScreen from './screen/cartScreen.jsx'
import LoginScreen from './screen/LoginScreen.jsx'
import RegisterScreen from './screen/RegisterScreen.jsx'
import ShippingScreen from './screen/ShippingScreen.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import PaymentScreen from './screen/PaymentScreen.jsx'
import PlaceOrderScreen from './screen/PlaceOrderScreen.jsx'
import OrderScreen from './screen/OrderScreen.jsx'
import ProfileScreen from './screen/ProfileScreen.jsx'
import OrderListScreen from './screen/admin/OrderListScreen.jsx'
import ProductListScreen from './screen/admin/ProductListScreen.jsx'
import ProductEditScreen from './screen/admin/ProductEditScreen.jsx'
import UserListScreen from './screen/admin/UserListScreen.jsx'
import UserEditScreen from './screen/admin/UserEditScreen.jsx'

createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider deferLoading={true}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
              <Route index path='/' element={<HomeScreen />} />
              <Route path='/search/:keyword' element={<HomeScreen />} />
              <Route path='/page/:pageNumber' element={<HomeScreen />} />
              <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />} />
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
                <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} />
                <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
                <Route path='/admin/userlist' element={<UserListScreen />} />
                <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
              </Route>

            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </PayPalScriptProvider>
)
