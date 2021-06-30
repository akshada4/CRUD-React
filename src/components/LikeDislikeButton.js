import { likePost, dislikePost } from '../actions/postActions';
import { connect } from 'react-redux';

const LikeDislikeButton = (props) => {
	const storeLikedPost = (e) => {
		const post = props.posts.posts[parseInt(e.target.value)]; 
		props.likePost(post);
	}

	const storeDislikedPost = (e) => {
		const post = props.posts.posts[parseInt(e.target.value)];
		props.dislikePost(post);
	}

	return (<div className="post-btn">
				<button value={props.value} onClick={storeLikedPost}>Like</button>
				<button value={props.value} onClick={storeDislikedPost}>Dislike</button>
			</div>)
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, { likePost, dislikePost })(LikeDislikeButton);