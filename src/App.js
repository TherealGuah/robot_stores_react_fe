import './app.css';
import {Route, Routes} from "react-router-dom";
import Body from "./components/Body";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App;
