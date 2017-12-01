import {
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return { ...state,
				favorites: state.favorites.concat(action.payload)}
		case REMOVE_FAVORITE:
			return { ...state,
				favorites: state.favorites.filter(favorite => favorite !== action.payload)}
		default:
			return state;
	}
}
