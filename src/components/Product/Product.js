const Product = (props) => {
    let {
            id,
            title,
            price,
            image ,
            category_id,
            category,
            character_id,
            character,
            description,
            image2,
            image3
        } = props.product;

    return (
        <li id={id}>
            <h2>{title}</h2>
            <p>{price}</p>
            <img src={image} alt='product'/>
            <p className={category_id}>{category}</p>
            <p className={character_id}>{character}</p>
            <p>{description}</p>
        </li>
    );
};

export default Product;