import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
// import Card from 'react-bootstrap/Card';
import {Col,Row,Card,Button,price} from 'react-bootstrap';

const Product = ({product,handleAddToCart}) => {
  
    const {name,img,price,ratings,seller}=product ;
    
    return (
      
        <Card className='m-2' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name.slice(0,19)}</Card.Title>
          <Card.Text >
           <p>price: {price}</p>
           <p><small>Seller: {seller}</small> </p>
           <p><small>Ratings: {ratings}</small> </p>
          </Card.Text>
          
          
          <Button onClick={()=>handleAddToCart(product)} className='w-100 d-flex   justify-content-evenly    ' variant="secondary"> <p className='ms-1 mt-1'>Add to Cart</p>
          <FontAwesomeIcon className='mt-2' icon={faShoppingCart}></FontAwesomeIcon>
          
          </Button>
         
        </Card.Body>
      </Card>
    );
};

export default Product;