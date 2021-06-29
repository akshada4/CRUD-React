const DisplayedPosts = ({ posts }) => {
	return (
		<div>
			{posts.map((post,index) => (
				<div key={post.id} className="post">
					<div>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
					</div>
					<div className="post-btn">
						<button value={post.id} id="like">Like</button>
						<button value={post.id} id="dislike">Dislike</button>
						<button value={post.id} id="update">Update</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default DisplayedPosts;