import{
	ADD_FAVORITE,
	REMOVE_FAVORITE,
	FETCH_DETAILS,
	FETCH_DETAILS_SUCCESS,
	FETCH_DETAILS_FAIL,
	API_KEY,
	DETAILS_REQUEST
} from '../constants/constants';
import RNFetchBlob from 'react-native-fetch-blob'

// Dispatch add_favorite action with restaurant to add
export const addFavorite = (restaurant) => { //adding to favorites
	// TODO: Fetch details
		// return (dispatch) => {
		// 	dispatch({ type: FETCH_DETAILS })
    //
		// 	const request = DETAILS_REQUEST + restraurant.id + API_KEY;
    //
		// 	fetch(request)
		// 		.then((response) => response.json())
		// 		.then((responseJson) => FETCH_DETAILS_SUCCESS(responseJson, restaurant))
		// }


	return {
		type: ADD_FAVORITE,
		payload: restaurant
	}
}

const fetchDetailsSuccess = (response, restaurant) => {
	favorite = {
		name: restaurant.name,
		id: restaurant.id
		address: restaurant.formatted_address,
		rating: restaurant.rating,
		price: restaurant.price_level,
		photo: restaurant.photo,
		// TODO: Fetch more photosif available
		phoneNumber: response.international_phone_number,
    websiteLink: response.website,
    reviews:,
	}

	return {
		type: ADD_FAVORITE,
		payload: favorite
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
