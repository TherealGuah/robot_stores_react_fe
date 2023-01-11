const Categories = ({handleAprons, handleHats}) => {

    return (
        <form>
            <div>
                <input type="checkbox" id="aprons" name="aprons" onChange={handleAprons} checked={true}/>
                <label htmlFor="bubbles">Aprons</label>
            </div>
            <div>
                <input type="checkbox" id="hats" name="hats" onChange={handleHats} checked={true}/>
                <label htmlFor="bubbles">Baseball Hats</label>
            </div>
            <div>
                <input type="checkbox" id="mugs" name="mugs"  checked={true}/>
                <label htmlFor="bubbles">Mugs</label>
            </div>
            <div>
                <input type="checkbox" id="shirts" name="shirts"  checked={true}/>
                <label htmlFor="bubbles">T-shirts</label>
            </div>
        </form>
    );
};

export default Categories;