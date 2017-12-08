import {
	FETCH_PHOTO,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAIL,
} from '../constants/types';

const INITIAL_STATE = {
	photo: {},
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case FETCH_PHOTO:
      return { ...state, query: action.payload, loading: true, error: '' };
    case FETCH_PHOTO_SUCCESS:
      return { ...state, loading: false, photo: action.payload };
    case FETCH_PHOTO_FAIL:
      return { ...state, loading: false, photo: {}, error: action.payload};
    default:
      return state;
  }
};
