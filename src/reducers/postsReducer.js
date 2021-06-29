import { FETCH_POSTS, CREATE_POST, UPDATE_POST } from '../actions/types'

const initialState = {
	posts: [],
	post: {}
};

const postsReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_POSTS:
			return {
				...state,
				posts: action.data
			}
		case CREATE_POST:
			return {
				...state,
				post: action.data
			}
		case UPDATE_POST:
			return {
				...state,
				post: action.data
			}
		default:
			return state;
	}
}

export default postsReducer;