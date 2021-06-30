const Search = () => {
	return (
		<div className="search">
			<form>
	            <input type="search" name="q" id="search-input" />
	            <button type="submit" className="btn" 
	            	id="search-post">Search</button>
	        </form>
         </div>
        )
}

export default Search;