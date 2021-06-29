import { getPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import DisplayedPosts from './DisplayedPosts';
import Pagination from './Pagination';
import HomepageHeader from './HomepageHeader'


const Posts = (props) => {
	useEffect(() => {
		props.getPosts()
	}, []);

	const [page, setPage] = useState(1);
	const limit = 5;
	const posts = props.posts.posts;
	const numberOfPosts = posts.length;

	return (
		<div>
			<HomepageHeader />
			<DisplayedPosts posts={posts.slice(page-1 , (page-1) + limit)} />
			{numberOfPosts ? <Pagination totalPosts={numberOfPosts} 
				limit={limit} page={page} setPage={setPage}/> : ''}
		</div>
		)
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, {getPosts})(Posts);
