const Characters = () => {
    return (
        <form>
            <div>
                <input type="checkbox" id="bubbles" name="bubbles"  checked={true}/>
                <label htmlFor="bubbles">Bubbles</label>
            </div>
            <div>
                <input type="checkbox" id="dolores" name="dolores"  checked={true}/>
                <label htmlFor="bubbles">Dolores</label>
            </div>
            <div>
                <input type="checkbox" id="fred" name="fred"  checked={true}/>
                <label htmlFor="bubbles">Fred</label>
            </div>
            <div>
                <input type="checkbox" id="rex" name="rex"  checked={true}/>
                <label htmlFor="bubbles">Rex</label>
            </div>
        </form>
    );
};

export default Characters;