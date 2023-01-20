const Characters = ({handleChange}) => {
    return (
        <form>
            <div>
                <input type="checkbox" id="Bubbles" onChange={handleChange} defaultChecked={true}/>
                <label htmlFor="Bubbles">Bubbles</label>
            </div>
            <div>
                <input type="checkbox" id="Dolores" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="bubbles">Dolores</label>
            </div>
            <div>
                <input type="checkbox" id="Fred" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Fred">Fred</label>
            </div>
            <div>
                <input type="checkbox" id="Rex" onChange={handleChange} defaultChecked={true} />
                <label htmlFor="Rex">Rex</label>
            </div>
        </form>
    );
};

export default Characters;