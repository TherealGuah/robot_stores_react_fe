const Characters = () => {
    return (
        <form>
            <div>
                <input type="checkbox" id="bubbles" name="bubbles" />
                <label htmlFor="bubbles">Bubbles</label>
            </div>
            <div>
                <input type="checkbox" id="dolores" name="dolores" />
                <label htmlFor="bubbles">Dolores</label>
            </div>
            <div>
                <input type="checkbox" id="fred" name="fred" />
                <label htmlFor="bubbles">Fred</label>
            </div>
            <div>
                <input type="checkbox" id="rex" name="rex" />
                <label htmlFor="bubbles">Rex</label>
            </div>
        </form>
    );
};

export default Characters;