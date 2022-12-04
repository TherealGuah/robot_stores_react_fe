const Categories = () => {
    return (
        <form>
            <div>
                <input type="checkbox" id="aprons" name="aprons" />
                <label htmlFor="bubbles">Aprons</label>
            </div>
            <input type="checkbox" id="hats" name="hats" />
            <label htmlFor="bubbles">Baseball Hats</label>
            <input type="checkbox" id="mugs" name="mugs" />
            <label htmlFor="bubbles">Mugs</label>
            <input type="checkbox" id="shirts" name="shirts" />
            <label htmlFor="bubbles">T-shirts</label>
        </form>
    );
};

export default Categories;