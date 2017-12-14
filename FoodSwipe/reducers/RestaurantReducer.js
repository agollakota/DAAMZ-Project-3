import {
	FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAIL,
	REMOVE_RESTAURANT
} from '../constants/constants';

const INITIAL_STATE = {
  query: {},
  error: '',
  loading: false,
	restaurants: []
};

// Handles changes to the search section of the state
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case FETCH_RESTAURANTS:
      return { ...state, query: action.payload, loading: true, error: '' };
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, loading: false, restaurants: action.payload };
    case FETCH_RESTAURANTS_FAIL:
      return { ...state, loading: false, query: {}, error: action.payload};
		case REMOVE_RESTAURANT:
			return { ...state,
				restaurants: state.restaurants.filter( (restaurant) => {
					return restaurant.name !== action.payload
				})}
    default:
      return state;
  }
};
