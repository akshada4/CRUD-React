import Posts from './components/Posts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost'; 

function App() {
  return (
    <Router>
      <div>
        <Route path="/CRUD-React/" exact component={Posts} />
        <Route path="/CRUD-React/createpost" component={CreatePost} />
      </div>
    </Router>
  );
}

export default App;
