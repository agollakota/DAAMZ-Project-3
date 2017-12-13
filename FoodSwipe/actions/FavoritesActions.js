import{
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from '../constants/constants';

export const addFavorite = (restraunt) => {
	return {
		type: ADD_FAVORITE,
		payload: restraunt
	}
}

export const removeFavorite = (restraunt) => {
	return {
		type: REMOVE_FAVORITE,
		payload: restraunt
	}
}
