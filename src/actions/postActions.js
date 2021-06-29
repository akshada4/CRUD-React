import { FETCH_POSTS, CREATE_POST, UPDATE_POST } from './types';

export const getPosts = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
					.then(response => response.json())
					.then(posts => dispatch({
						type: FETCH_POSTS,
						data: posts
					}));
	}
}

export const createPost = (newPost) => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
  			method: 'POST',
  			body: JSON.stringify(newPost),
  			headers: {
    			'Content-type': 'application/json; charset=UTF-8',
  			},
		})
  		.then(response => response.json())
  		.then(post => dispatch({
  			type: CREATE_POST,
  			data: post 
  		}));
	}
}

export const updatePosts = (updatedPost) => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
	  		method: 'PUT',
	 		body: JSON.stringify(updatedPost),
	  		headers: {
	    		'Content-type': 'application/json; charset=UTF-8',
	  		},
		})
	  	.then((response) => response.json())
	  	.then(post => dispatch({
	  			type: UPDATE_POST,
	  			data: post
	  		}));
	}
}