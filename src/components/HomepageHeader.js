import { Link } from 'react-router-dom';
import Search from './Search';

const HomepageHeader = () => {

	return (
		<header>
          <Search />     
          <Link to="/CRUD-React/createpost">    
            <div className="header-buttons" id="new-post-btn">          
                  <button className="btn" 
                          id="add-post">New Post</button>              
            </div>
          </Link>
        </header>
        )
}

export default HomepageHeader;