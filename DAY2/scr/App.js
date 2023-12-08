import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 19.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 29.99,
        image: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
];

const App = () => {
    const handleCheckout = () => {
        alert('Checkout button clicked!');
        // Add logic for handling checkout
    };

    return (
        <div className="App">
            <Header />
            <div className="product-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer handleClick={handleCheckout} />
        </div>
    );
};

export default App;
