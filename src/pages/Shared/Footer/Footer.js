import React from 'react';

const Footer = () => {
    const current=new Date()
    const year=current.getFullYear()
    return (
        <footer className='text-center mt-5'>
           <p>copyright@shah{year}</p> 
        </footer>
    );
};

export default Footer;