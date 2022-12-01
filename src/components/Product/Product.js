import './Product.css';

const Product = (props) => {
    let {
        id,
        title,
        price,
        image,
    } = props.product;

    return (
        <li id={id}>
            <a href="">
                <img src={image} alt='product'/>
                <h3>{title}</h3>
                <p>{price}</p>
            </a>
        </li>
    );
};

export default Product;