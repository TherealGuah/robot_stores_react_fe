import Header from './Header/Header';
import Categories from "./Categories/Categories";
import Characters from "./Characters/Characters";
import Products from './Products/Products';
import Footer from './Footer/Footer';
import './Body.css';

const Body = () => {
    return (
        <>
            <Header />

            <main>
                <form>
                    <Categories />
                    <Characters />
                </form>
                <Products />
            </main>

            <Footer />
        </>
    );
};

export default Body;

