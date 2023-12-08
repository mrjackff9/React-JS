// src/components/Footer.js
import React from 'react';

const Footer = ({ handleClick }) => {
    return (
        <footer>
            <button onClick={handleClick}>Checkout</button>
        </footer>
    );
};

export default Footer;
