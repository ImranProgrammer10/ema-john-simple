import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css'; 
const ReviewItem = (props) => {
  const {product,handleRemoveProduct}=props;
    const {name, img, price, shipping, quantity} =product;
    return (
        <Container className='border border-1'>
          <Row>
        <Col sm={3}><img className='img-fluid' src={img} alt=""/></Col>
        <Col sm={7}>
            <h6 className='d-flex justify-content-start'>{name}</h6>
          
            <h6 className='d-flex justify-content-start'>price:${price}</h6>
            <h6 className='d-flex justify-content-start'>shipping:${shipping}</h6>
            <h6 className='d-flex justify-content-start'>quantity:${quantity}</h6>
            
        </Col>
        <Col className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </Col>
      </Row>
        </Container>
    );
};

export default ReviewItem;