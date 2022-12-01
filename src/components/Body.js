import Products from './Products/Products';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Body.css';

const Body = () => {
    return (
        <>
            <Header />

            <main>
                <Products />
            </main>

            <Footer />
        </>
    );
};

export default Body;

