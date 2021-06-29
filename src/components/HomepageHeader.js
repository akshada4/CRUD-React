import { Link } from 'react-router-dom';

const HomepageHeader = () => {
	return (
		<header>
          <div className="search">
            <input type="search" name="searched-post" id="search-input" />
            <button className="btn" id="search-post">Search</button>
          </div>
          <Link to="/createpost" >
            <div className="header-buttons" id="new-post-btn">
              <button className="btn" id="add-post">New Post</button>
            </div>
          </Link>
        </header>
        )
}

export default HomepageHeader;