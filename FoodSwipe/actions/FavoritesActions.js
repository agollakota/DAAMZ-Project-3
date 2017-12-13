import{
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from '../constants/constants';

export const addFavorite = (restaurant) => { //adding to favorites
	return {
		type: ADD_FAVORITE,
		payload: restaurant
	}
}

export const removeFavorite = (restaurant) => { //removing from favorites
	return {
		type: REMOVE_FAVORITE,
		payload: restaurant
	}
}
