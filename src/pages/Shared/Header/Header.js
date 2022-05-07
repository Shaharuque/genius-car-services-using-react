import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div style={{backgroundColor:'teal'}} >
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
            </div>
        </header>
    );
};

export default Header;