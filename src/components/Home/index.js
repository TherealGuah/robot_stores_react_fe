import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
            <Link to={'/products'}>
                <h1>To Products</h1>
            </Link>
        </>
    );
};

export default Home;