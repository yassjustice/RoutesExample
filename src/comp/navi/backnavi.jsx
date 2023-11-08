import React from 'react';
import { Link } from 'react-router-dom';

const Backnavi = ({ baseUrl }) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${baseUrl}`}>Home</Link>
                </li>
                <li>
                    <Link to={`${baseUrl}/Allcategories`}>Allcategories</Link>
                </li>
                <li>
                    <Link to={`${baseUrl}/AllProducts`}>AllProducts</Link>
                </li>
                <li>
                    <Link to={`${baseUrl}/AllCustomers`}>AllCustomers</Link>
                </li>
            </ul>
        </div>
    );
}

export default Backnavi;
