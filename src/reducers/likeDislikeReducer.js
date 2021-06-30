import {LIKED_POST, DISLIKED_POST} from '../actions/types';

const initialState = {
	liked: [],
	disliked: []
}

const likeDislikeReducer = (state = initialState, action) => {
	switch(action.type){
		case LIKED_POST:
			return {
				...state,
				liked: [...state.liked, action.data]
			};
		case DISLIKED_POST:
			return {
				...state,
				disliked:  [...state.disliked, action.data]
			};
		default:
			return state;
	}

}

export default likeDislikeReducer;