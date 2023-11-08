import React from "react";
import Auth from "./pages/auth";
import AllCustomers from "./pages/allCustomers";
import Allcategories from "./pages/allCategories";
import AllProducts from "./pages/allProducts";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
    useParams,
} from "react-router-dom";
import Backnavi from "../navi/backnavi";
const Backoffice = () => {
    return (
        <div>
            <Backnavi baseUrl="/backoffice"></Backnavi>
            <Routes>
                <Route index element={<Auth />} />
                <Route path="/Allcategories" element={<Allcategories />} />
                <Route path="/AllProducts" element={<AllProducts />} />
                <Route path="/AllCustomers" element={<AllCustomers />} />
            </Routes>
        </div>
    );
};

export default Backoffice;
