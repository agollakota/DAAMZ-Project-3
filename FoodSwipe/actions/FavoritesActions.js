import{
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from '../constants/constants';

export const addToFavorites = (restraunt) => {
	return {
		type: ADD_FAVORITE,
		payload: restraunt
	}
}

export const removeFromFavorites = (restraunt) => {
	return {
		type: REMOVE_FAVORITE,
		payload: restraunt
	}
}
