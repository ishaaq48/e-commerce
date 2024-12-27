import { useNavigate } from 'react-router-dom'
import { Navbar,Nav,Container,Badge, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'

const Header = () => {
    const { cartItems } = useSelector(state => state.cart)
    const { userInfo } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate('/auth')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <header>
        <Navbar bg="dark" variant = "dark" expand="md" collapseOnSelect>
            <Container>
                <Link to="/" className="navbar-brand">
                    eShop
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Link to="/cart" className="nav-link">
                            <FaShoppingCart /> Cart
                            {cartItems.length > 0 && (
                                <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                                </Badge>
                            )}
                        </Link>
                        { userInfo ? (
                            <NavDropdown title = {userInfo.name} id='username'>
                                <NavDropdown.Item>
                                <Link to='/profile' className="nav-link" style={{color: 'black'}}>
                                    Profile
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ms-1' onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link to="/auth" className="nav-link">
                                <FaUser />Sign In
                            </Link>
                    )}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header