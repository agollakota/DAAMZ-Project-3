import{
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from '../constants/constants';

export const addFavorite = (restaurant) => {
	return {
		type: ADD_FAVORITE,
		payload: restaurant
	}
}

export const removeFavorite = (restaurant) => {
	return {
		type: REMOVE_FAVORITE,
		payload: restaurant
	}
}
