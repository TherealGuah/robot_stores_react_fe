const Categories = ({handleChange}) => {

    return (
        <form>
            <div>
                <input type="checkbox" id="Aprons" name="Aprons" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Aprons">Aprons</label>
            </div>
            <div>
                <input type="checkbox" id="Hats" name="Hats" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Hats">Baseball Hats</label>
            </div>
            <div>
                <input type="checkbox" id="Mugs" name="Mugs" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Mugs">Mugs</label>
            </div>
            <div>
                <input type="checkbox" id="Shirts" name="Shirts" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Shirts">T-shirts</label>
            </div>
        </form>
    );
};

export default Categories;