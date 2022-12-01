import Products from './Products/Products';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import 'src/components/index.module.css';

const Main = () => {
    return (
        <>
            <Header />
            <Products />
            <Footer />
        </>
    );
};

export default Main;

