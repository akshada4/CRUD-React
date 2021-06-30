import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import likeDislikeReducer from './likeDislikeReducer'

export default combineReducers({
	posts : postsReducer,
	likedDislikedPosts: likeDislikeReducer,
})
