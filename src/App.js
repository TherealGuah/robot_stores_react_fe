import './app.css';
import {Route, Routes} from "react-router-dom";
import Body from "./components/Body";
import PageNotFound from "./components/PageNotFound";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
        <Routes>
            <Route path="/products" element={<Body />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App;
