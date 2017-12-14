import {
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from '../constants/constants';

const INITIAL_STATE = {
	list: []
};

// Handles changes to the favorites section of the state
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return { ...state, list: state.list.concat(action.payload)}
		case REMOVE_FAVORITE:
			return { ...state, list: state.list.filter(favorite => favorite !== action.payload)}
		default:
			return state;
	}
}
