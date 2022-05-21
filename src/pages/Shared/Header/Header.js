import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/images/logo.png'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {
    //logged in user info
    const [user] = useAuthState(auth);

    const signOutHandle=()=>{
        signOut(auth);
    }
    return (
        <>
            {/* <div style={{backgroundColor:'teal'}} >
                <Container style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div>
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <div>
                        <Link style={{color:'white',marginRight:'5px',textDecoration:'none'}} to='/'>Home</Link>
                        <Link style={{color:'white',marginRight:'5px',textDecoration:'none'}}  to='/'>Features</Link>
                        <Link style={{color:'white',marginRight:'5px',textDecoration:'none'}}  to='/about'>Pricing</Link>
                    </div>
                </Container>
    </div>*/}
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{height:'30px'}} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user ?
                                <>
                                <Nav.Link as={Link} to="/addservice">ADD_Service</Nav.Link>
                                <Nav.Link as={Link} to="/manageservice">MANAGE_service</Nav.Link>  
                                <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link>  
                                </>
                               :
                               null
                            }
                            
                            {
                                user ?
                                <button style={{height:'30px',borderRadius:'5px'}} onClick={signOutHandle}>Sign-out</button>
                                :
                                <Nav.Link as={Link} to="/login">login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;