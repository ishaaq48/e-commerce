import { Link,useParams,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card,Form } from "react-bootstrap"
import {toast} from 'react-toastify'
import Rating from "../components/Rating"
import { useGetProductDetailsQuery,useCreateReviewMutation } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

import {addToCart} from '../slices/cartSlice'
import { useState } from 'react'
const ProductScreen = () => {
    const { id: productId } = useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const { data: product, isLoading, refetch, isError } = useGetProductDetailsQuery(productId);

     const { userInfo } = useSelector((state) => state.auth);

     const [createReview, { isLoading: loadingProductReview }] = useCreateReviewMutation();
    
    const addToCartHandler = () => {
        dispatch(addToCart({...product,qty: Number(qty)}))
        navigate('/cart')
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        
        try {
            await createReview({
                productId,
                rating,
                comment,
            }).unwrap()
            refetch()
            toast.success('Review Submitted')
            setRating(0)
            setComment('')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }
    return (
        <>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        
            { isLoading ? (<Loader />)

            : isError ? (
            <Message variant="danger">{isError?.data?.message}</Message>
        ) :
                        (
                        <>
                        <Row>
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
                        </Row>
                       <Row className='reviews'>
                            <Col md={6}>
                                <h2>Reviews</h2>
                                {product.review.length === 0 && <Message>No Reviews</Message>}
                                <ListGroup variant='flush'>
                                {product.review.map((review) => (
                                    <ListGroup.Item key={review._id}>
                                    <strong>{review.name}</strong>
                                    <Rating value={review.rating} />
                                    <p>{review.createdAt.substring(0, 10)}</p>
                                    <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>
                                    <h2>Write Customer Review</h2>

                                    {loadingProductReview && <Loader />}
                                    { userInfo ? (
                                        <Form onSubmit={submitHandler}>
                                            <Form.Group controlId='rating' className='my-2'>
                                                <Form.Label>Rating</Form.Label>
                                                 <Form.Control
                                                    as='select'
                                                    required
                                                    value={rating}
                                                    onChange={(e) => setRating(e.target.value)}
                                                    >
                                                    <option value=''>Select...</option>
                                                    <option value='1'>1 - Poor</option>
                                                    <option value='2'>2 - Fair</option>
                                                    <option value='3'>3 - Good</option>
                                                    <option value='4'>4 - Very Good</option>
                                                    <option value='5'>5 - Excellent</option>
                                                </Form.Control>
                                                <Form.Group controlId='comment' className='my-2'>
                                                    <Form.Label>Comment</Form.Label>
                                                    <Form.Control
                                                        as='textarea'
                                                        row='3'
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                        >
                                                        
                                                    </Form.Control>
                                                </Form.Group>                                                        
                                            </Form.Group>
                                            <Button
                                                disabled={loadingProductReview}
                                                type='submit'
                                                variant='primary'
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                ) : (
                                <Message>
                                    Please <Link to='/auth'>sign in</Link> to write a review{' '}
                                </Message>
                            )}
                                </ListGroup.Item>
                                </ListGroup>
                            </Col>
                       </Row>

                        </>
                    )
            }
        </>
  )
}

export default ProductScreen