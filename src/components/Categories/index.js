const Categories = ({handleChange}) => {
    return (
        <form>
            <div>
                <input type="checkbox" id="Aprons" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Aprons">Aprons</label>
            </div>
            <div>
                <input type="checkbox" id="Hats" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Hats">Baseball Hats</label>
            </div>
            <div>
                <input type="checkbox" id="Mugs" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Mugs">Mugs</label>
            </div>
            <div>
                <input type="checkbox" id="Shirts" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Shirts">T-shirts</label>
            </div>
        </form>
    );
};

export default Categories;