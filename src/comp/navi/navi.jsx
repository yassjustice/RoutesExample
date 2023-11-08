import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
    useParams
  } from "react-router-dom";
const Navi = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/backoffice">Backoffice</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navi;
