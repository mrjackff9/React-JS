// File: MyComponent.js

import React from 'react';

const MyComponent = () => {
    // Hard-coded data converted to an array of objects
    const dataArray = [
        {
            name: 'John',
            age: 25,
            city: 'New York'
        },
        {
            name: 'Alice',
            age: 30,
            city: 'San Francisco'
        }
    ];

    return (
        <div>
            <h1>My Component</h1>
            <ul>
                {dataArray.map((item, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}, <strong>City:</strong> {item.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
