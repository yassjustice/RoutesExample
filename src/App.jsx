import "./App.css";
import ComponentsIndex from "./comp/componentsIndex";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
    useParams,
} from "react-router-dom";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<ComponentsIndex />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
