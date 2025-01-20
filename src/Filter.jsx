export default function Filter({ handleFilter, inputCategory, setInputCategory }){
    return(
        <div>
            <label>Filter by Category</label>
            <input type="text" placeholder="type category" value={inputCategory}
                   onChange={(e) => setInputCategory(e.target.value)}/>
            <button onClick={handleFilter}>Filter</button>
        </div>
    )
}