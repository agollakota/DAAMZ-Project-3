import {
	FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAIL,
	UPDATE_RESTAURANTS
} from '../constants/constants';

const INITIAL_STATE = {
  query: {},
  error: '',
  loading: false,
	restaurants: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case FETCH_RESTAURANTS:
      return { ...state, query: action.payload, loading: true, error: '' };
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, loading: false, restaurants: action.payload };
    case FETCH_RESTAURANTS_FAIL:
      return { ...state, loading: false, query: {}, error: action.payload};
		case UPDATE_RESTAURANTS:
			return { ...state, restaurants: action.payload}
    default:
      return state;
  }
};
