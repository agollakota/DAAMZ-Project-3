import{
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from '../constants/constants';

// Dispatch add_favorite action with restaurant to add
export const addFavorite = (restaurant) => { //adding to favorites
	return {
		type: ADD_FAVORITE,
		payload: restaurant
	}
}

// Dispatch remove_favorite action with restaurant to remove
export const removeFavorite = (restaurant) => { //removing from favorites
	return {
		type: REMOVE_FAVORITE,
		payload: restaurant
	}
}

// TODO: Places Google details request so we can add data like phone_number
