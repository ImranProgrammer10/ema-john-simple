import React from 'react';
import { Col,Container, Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
 

const OrderReview = () => {
    const [products, setProducts] = useProducts
    ();
    const [cart,setCart]=useCart(products);
    const handleRemoveProduct = product =>{
      const rest = cart.filter(pd => pd.id !== product.id);
      setCart(rest);
      removeFromDb(product.id);
  }
    return (
        <Container>
      <Row>
      <Col className='d-flex flex-wrap justify-content-start' xs={6} sm={6} md={9}>

      {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product ={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }

        </Col>
        <Col className='bg-warning text-dark  '  xs={6} sm={6} md={3} >
          <Cart
          cart={cart}
          
          ></Cart>
        </Col>
      </Row>
      
    </Container>
    );
};

export default OrderReview;