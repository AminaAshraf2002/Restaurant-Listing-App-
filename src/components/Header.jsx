import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { searchRestaurant } from '../redux/restaurantSlice';
import './Header.css';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';


function Header({ insideHome }) {
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg">
      <Container className='p-3 navContainer'>
        <Navbar.Brand href="#home" style={{ fontSize: '1.8em' }}>
          <Link className='text-warning text-decoration-none' to={'/'}>
          <Utensils size={35} className='text-warning me-2' strokeWidth={3.5} absoluteStrokeWidth />
            <i className="fa-solid fa-location-dot"></i> <span className="restaurant-name">Lettuce EAT BISTRO</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {insideHome && (
              <Nav.Link>
                <input
                  onChange={e => dispatch(searchRestaurant(e.target.value.toLowerCase()))}
                  placeholder='Search Restaurant By Cities'
                  className=' rounded p-2 txtBox'
                  type="text"
                />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
