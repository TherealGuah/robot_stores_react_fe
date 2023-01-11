const Categories = ({handleAprons, handleHats}) => {

    return (
        <form>
            <div>
                <input type="checkbox" id="aprons" name="aprons" onChange={handleAprons}/>
                <label htmlFor="bubbles">Aprons</label>
            </div>
            <div>
                <input type="checkbox" id="hats" name="hats" onChange={handleHats}/>
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