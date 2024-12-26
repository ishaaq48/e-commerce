import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSteps = ( {step1, step2, step3, step4} ) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Link to="/auth" className="nav-link">
            Sign In
          </Link>
        ) : (
          <span className="nav-link text-muted" aria-disabled="true">
            Sign In
          </span>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Link to="/shipping" className="nav-link">
            Shipping
          </Link>
        ) : (
          <span className="nav-link text-muted" aria-disabled="true">
            Shipping
          </span>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Link to="/payment" className="nav-link">
            Payment
          </Link>
        ) : (
          <span className="nav-link text-muted" aria-disabled="true">
            Payment
          </span>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <Link to="/placeorder" className="nav-link">
            Place Order
          </Link>
        ) : (
          <span className="nav-link text-muted" aria-disabled="true">
            Place Order
          </span>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
