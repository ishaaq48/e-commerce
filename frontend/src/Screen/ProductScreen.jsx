import { Link,useParams,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card,Form } from "react-bootstrap"
import Rating from "../components/Rating"
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {addToCart} from '../slices/cartSlice'
import { useState } from 'react'
const ProductScreen = () => {
    const { id: productId } = useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [qty, setQty] = useState(1)

    const { data: product, isLoading,isError } = useGetProductDetailsQuery(productId);
    
    const addToCartHandler = () => {
        dispatch(addToCart({...product,qty: Number(qty)}))
        navigate('/cart')
    }
    return (
        <>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        
            { isLoading ? (<Loader />)

            : isError ? (
            <Message variant="danger">{isError?.data?.message}</Message>
        ) :
                        (<Row>
                            <Col md={6}>
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Price: ${product.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Description: {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Price:
                                                </Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Status:
                                                </Col>
                                                <Col>
                                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col>
                                                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}
                                        <ListGroup.Item>
                                            <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={addToCartHandler}>
                                                Add to Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>)
            }
        </>
  )
}

export default ProductScreen