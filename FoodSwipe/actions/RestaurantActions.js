import{
	FETCH_RESTAURANTS,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_FAIL,
	UPDATE_RESTAURANTS,
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
				dispatch({
					type: FETCH_RESTAURANTS_FAIL,
					payload: error
				});
			});
		}
}

const setRestaurantData = (response) => {

	let restaurants = response.results.map( async (result, index) => {
		return {
			name: result.name,
			address: result.formatted_address,
			rating: result.rating,
			price: result.price_level,
			photo: await getPhoto(result.photos[0].photo_reference)
		};
	})
	return Promise.all(restaurants)
}
const getPhoto = (photo) => {

		if (typeof photo === 'undefined') {
			return 'null'
		}

		const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'
		const PhotoRef = '&photoreference=' + photo
		const request = PHOTO_REQUEST + PhotoRef + API_KEY

		return RNFetchBlob
			.fetch('GET', request)
			.then((res) => {
				return res.info().redirects[1]
			})
			.catch(error => {
				console.log("Caught Error:");
				console.error(error);
			});
		}


const fetchRestaurantsSuccess = async (dispatch, response) => {

	let restaurants = response.filter(response => response.photo != 'null')

	dispatch({
    type: FETCH_RESTAURANTS_SUCCESS,
    payload: restaurants
  });
};

export const updateRestaurants = (restaurants) => {
	return {
		type: UPDATE_RESTAURANTS,
		payload: restaurants
	};
}
