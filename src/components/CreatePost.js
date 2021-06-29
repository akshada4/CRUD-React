import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

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
			<Link to="/" >
				<button className="btn" id="home">Home</button>		
			</Link>
		</header>
		<div className="create-post">
			<form>
				<div>
					<label>Title</label>
					<textarea type="text" name="title" 
					id="title" onChange={e => setPost({...post, 
														title:e.target.value})}></textarea>
				</div>
				<div>
					<label>Content</label>
					<textarea type="text" name="body" 
					id="body" onChange={e => setPost({...post, 
														body:e.target.value})}></textarea>
				</div>
				<div>
					<button type="submit" className="btn" id="create-btn" onClick={submitPost}>Create Post</button>
				</div>
				{submit ? <p style={{fontSize:"2rem",
									color:"green"}}>New Post Created</p> : ''}
			</form>
		</div>
	</div>
	)
}


export default connect(null, {createPost})(CreatePost);