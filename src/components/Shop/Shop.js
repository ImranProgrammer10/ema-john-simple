import React, { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import useProducts from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';



 

const Shop = () => {
    const [products,setProducts]= useProducts();
    const [cart,setCart]=useState([]);

    

    useEffect( () =>{
      const storedCart = getStoredCart();
      const savedCart = [];
      for(const id in storedCart){
          const addedProduct = products.find(product => product.id === id);
          if(addedProduct){
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;
              savedCart.push(addedProduct);
          }
      }
      setCart(savedCart);
  }, [products])

    const handleAddToCart = (selectedProduct) =>{
      console.log(selectedProduct);
      let newCart = [];
      const exists = cart.find(product => product.id === selectedProduct.id);
      if(!exists){
          selectedProduct.quantity = 1;
          newCart = [...cart, selectedProduct];
      }
      else{
          const rest = cart.filter(product => product.id !== selectedProduct.id);
          exists.quantity = exists.quantity + 1;
          newCart = [...rest, exists];
      }
      
      setCart(newCart);
      addToDb(selectedProduct.id);
  }
    return (
      <Container>
      <Row >
      <Col className='d-flex flex-wrap justify-content-start' xs={11} sm={10} md={10}>

        {
  products.map(product=><Product
  product={product}
  key={product.id}
  handleAddToCart={handleAddToCart}
  ></Product>)
}

        </Col>
        <Col className='bg-warning text-dark  '  xs={1} sm={2} md={2} >
          <Cart
          cart={cart}
          
          ></Cart>
        </Col>
      </Row>
      
    </Container>
    );
};

export default Shop;