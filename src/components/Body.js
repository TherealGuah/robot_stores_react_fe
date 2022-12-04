import Header from './Header/Header';
import Categories from "./Categories/Categories";
import Characters from "./Characters/Characters";
import Products from './Products/Products';
import Footer from './Footer/Footer';

const Body = () => {
    return (
        <>
            <Header />

            <main>
                <div>
                    <Categories />
                    <Characters />
                </div>
                <Products />
            </main>

            <Footer />
        </>
    );
};

export default Body;

