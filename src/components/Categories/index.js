const Categories = () => {
    return (
        <form>
            <div>
                <input type="checkbox" id="aprons" name="aprons" />
                <label htmlFor="bubbles">Aprons</label>
            </div>
            <div>
                <input type="checkbox" id="hats" name="hats" />
                <label htmlFor="bubbles">Baseball Hats</label>
            </div>
            <div>
                <input type="checkbox" id="mugs" name="mugs" />
                <label htmlFor="bubbles">Mugs</label>
            </div>
            <div>
                <input type="checkbox" id="shirts" name="shirts" />
                <label htmlFor="bubbles">T-shirts</label>
            </div>
        </form>
    );
};

export default Categories;