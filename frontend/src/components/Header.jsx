import { Navbar,Nav,Container,Badge } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import {Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const { cartItems } = useSelector(state => state.cart)
    
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
                        <Link to="/login" className="nav-link">
                            <FaUser />Sign In
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header