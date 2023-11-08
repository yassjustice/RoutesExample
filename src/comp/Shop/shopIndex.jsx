import React from "react";
import ShowProducts from "./pages/showProducts";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
    useParams,
} from "react-router-dom";
import ShowCategories from "./pages/showCategories";
import ShopNavi from "../navi/shopnavi";
import ShowHome from "./pages/showHome";

const ShopIndex = () => {
    return (
        <div>
            <ShopNavi baseUrl="/shop"></ShopNavi>
            <Routes>
                <Route index element={<ShowHome />} />
                <Route path="/ShowProducts" element={<ShowProducts />} />
                <Route path="/ShowCategories" element={<ShowCategories />} />
            </Routes>
        </div>
    );
};

export default ShopIndex;
