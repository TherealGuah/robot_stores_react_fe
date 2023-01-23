import './app.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Body from "./components/Body";
import PageNotFound from "./components/PageNotFound";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Body />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App;
