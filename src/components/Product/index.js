import {Link} from 'react-router-dom';

const Product = (props) => {
    let {
        id,
        title,
        price,
        image,
    } = props.product;

    return (
        <li id={id}>
            <Link to={`/products/${id}`}>
                <img src={image} alt='product'/>
                <h3>{title}</h3>
                <p>{price.toLocaleString(undefined, {style: 'currency', currency: 'GBP'})}</p>
            </Link>
        </li>
    );
};

export default Product;