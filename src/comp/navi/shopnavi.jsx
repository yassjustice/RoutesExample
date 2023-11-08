import React from 'react';
import { Link } from 'react-router-dom';

const ShopNavi = ({ baseUrl }) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${baseUrl}`}>Shop Home</Link>
                </li>
                <li>
                    <Link to={`${baseUrl}/ShowCategories`}>ShowCategories</Link>
                </li>
                <li>
                    <Link to={`${baseUrl}/ShowProducts`}>ShowProducts</Link>
                </li>
            </ul>
        </div>
    );
}

export default ShopNavi;
