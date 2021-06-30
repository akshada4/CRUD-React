import LikeDislikeButton from './LikeDislikeButton'

const DisplayedPosts = ({ posts }) => {
	return (
		<div>
			{posts.map((post,index) => (
				<div key={post.id} className="post">
					<div>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
					</div>
					<LikeDislikeButton value={post.id} />
				</div>
			))}
		</div>
	);
}

export default DisplayedPosts;