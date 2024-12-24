import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { BASE_URL } from '../constants';
import { useGetProductsQuery } from '../slices/productsApiSlice';
const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(BASE_URL);
  return (
    <>
      { isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (<>
      <Row>
        <h1>Latest Products</h1>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product = {product} />
        </Col>
      ))}
    </Row>
    </>)}

    </>
    
  );
};

export default HomeScreen;
