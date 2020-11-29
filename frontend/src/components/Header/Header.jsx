import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container, NavDropdown,Image} from 'react-bootstrap';
import {logout} from '../../actions/userActions';
import Menu from '../menu/Menu'
import {Route,Link} from 'react-router-dom'
import metal1 from './metal1.png'
const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  
  const logoutHandler = () =>{
    dispatch(logout())
  }

  return (
    <header>
      <Navbar className='navbar-header' variant='dark' expand="lg" collapseOnSelect >
          <Container>
         
        
        <Nav.Link href='/' onClick={() => window.location.href=`/`}> <h4 className='metal'>METALMASTER</h4>  </Nav.Link>
        
          
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <LinkContainer to='/' exact>
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about' exact>
          <Nav.Link >About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/categories' >
          <Nav.Link >Categories</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/cart'>
            <Nav.Link> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                 
                <LinkContainer to='/profile' >
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>

              </NavDropdown>
            ):
            <LinkContainer to='/login'>
            <Nav.Link ><i className="fas fa-user"></i>Sign In</Nav.Link>
            </LinkContainer>
            }  
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='admin' id='adminmenu'> 
              <LinkContainer to='/admin/userlist'>
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/productlist'>
                <NavDropdown.Item>Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/orderlist'>
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>
            )}
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
