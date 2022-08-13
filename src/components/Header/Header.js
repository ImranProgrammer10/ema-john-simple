import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/Logo.svg';
import './Header.css';

function CollapsibleExample() {
    return (
      <Navbar  collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="-auto">
               
              
          
            </Nav>
           <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
             <Nav
              className="me-auto my-2 my-lg-0 header"
              style={{ maxHeight: '100px'  }}
              navbarScroll
            >
                     <Nav.Link as={HashLink} to="/shop">Shop</Nav.Link>
             
              <Nav.Link  as={HashLink}  to="/review"><FontAwesomeIcon icon={faShoppingCart} />
        <Badge bg="secondary"> </Badge>
        </Nav.Link>
        <Nav.Link as={HashLink} to="/orders">Orders</Nav.Link>
       
        <Nav.Link as={HashLink} to="/inventory">Inventory</Nav.Link>
        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
         
              
            </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default CollapsibleExample;