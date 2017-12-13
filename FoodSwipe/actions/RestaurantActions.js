import{
	FETCH_RESTAURANTS,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_FAIL,
	REMOVE_RESTAURANT,
	API_KEY,
	PLACES_REQUEST,
	PHOTO_REQUEST
} from '../constants/constants';
import RNFetchBlob from 'react-native-fetch-blob'

export const fetchRestaurants = (query) => {
	return (dispatch) => {
	  dispatch({ type: FETCH_RESTAURANTS, payload: query });

		const request = PLACES_REQUEST + query + API_KEY;

		fetch(request)
			.then((response) => response.json())
			.then(responseJson => setRestaurantData(responseJson))
			.then( (restaurants) => {
				fetchRestaurantsSuccess(dispatch, restaurants)
			})
			.catch(error => {
				console.log("Request Error:");
				console.log(error);
				dispatch({
					type: FETCH_RESTAURANTS_FAIL,
					payload: error
				});
			});
		}
}

const setRestaurantData = (response) => {
	let results = response.results.filter( (result) => {
		try {
			return typeof(result.photos[0]) !== 'undefined';
		} catch (error) {
			return false
		}
	})
	let restaurants = results.map( async (result, index) => {
		return {
			name: result.name,
			address: result.formatted_address,
			rating: result.rating,
			price: result.price_level,
			photo: await getPhoto(result.photos[0])
		};
	})
	return Promise.all(restaurants)
}

const getPhoto = (photo) => {

	const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'
	const PhotoRef = '&photoreference=' + photo.photo_reference
	const request = PHOTO_REQUEST + PhotoRef + API_KEY

	return RNFetchBlob
		.fetch('GET', request)
		.then((res) => {
			return res.info().redirects[1]
		})
		.catch(error => {
			console.log("Caught Photo Error:" + error);
		});
}


const fetchRestaurantsSuccess = async (dispatch, response) => {
	dispatch({
    type: FETCH_RESTAURANTS_SUCCESS,
    payload: response
  });
};

export const removeRestaurant = (name) => {
	console.log(name);
	return {
		type: REMOVE_RESTAURANT,
		payload: name
	};
}
