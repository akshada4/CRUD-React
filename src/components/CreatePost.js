import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'
import Search from './Search'

const CreatePost = (props) => {
	const [post, setPost] = useState({
		title: null,
		body: null
	});
	
	const [submit, setSubmit] = useState(false);

	const submitPost = (e) => {
		e.preventDefault();
		props.createPost(post);
		setSubmit(true)
	}

	return (
	<div>
		<header>
			<Link to="/CRUD-React">
				<button className="create-post-btn" id="home">Home</button>	
			</Link>
			<Search />
		</header>
		<div className="create-post">
			<form>
				<div>
					<label htmlFor="title">Title</label>
					<textarea type="text" name="title" 
					id="title" onChange={e => setPost({...post, 
														title:e.target.value})}></textarea>
				</div>
				<div>
					<label htmlFor="body">Content</label>
					<textarea type="text" name="body" 
					id="body" onChange={e => setPost({...post, 
														body:e.target.value})}></textarea>
				</div>
				<div>
					<button type="submit" className="create-post-btn" id="create-btn" onClick={submitPost}>Create Post</button>
				</div>
				{submit ? <p style={{fontSize:"2rem",
									color:"green"}}>New Post Created</p> : ''}
			</form>
		</div>
	</div>
	)
}


export default connect(null, {createPost})(CreatePost);