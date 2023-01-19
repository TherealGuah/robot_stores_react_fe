const Characters = (props) => {
    const { handleChange } = props;

    return (
        <form>
            <div>
                <input type="checkbox" id="Bubbles" name="Bubbles" onChange={handleChange} defaultChecked={true}/>
                <label htmlFor="Bubbles">Bubbles</label>
            </div>
            <div>
                <input type="checkbox" id="Dolores" name="Dolores" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="bubbles">Dolores</label>
            </div>
            <div>
                <input type="checkbox" id="Fred" name="Fred" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Fred">Fred</label>
            </div>
            <div>
                <input type="checkbox" id="Rex" name="Rex" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Rex">Rex</label>
            </div>
        </form>
    );
};

export default Characters;