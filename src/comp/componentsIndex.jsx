import React from "react";
import Backoffice from "./backOffice/backofficeIndex";
import ShopIndex from "./Shop/shopIndex";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
    useParams,
} from "react-router-dom";
import Navi from "./navi/navi";
const ComponentsIndex = () => {
    return (
        <div>
            <Navi></Navi>
            <Routes>
                <Route path="/backoffice/*" element={<Backoffice />} />
                <Route path="/shop/*" element={<ShopIndex />} />
            </Routes>
        </div>
    );
};

export default ComponentsIndex;
