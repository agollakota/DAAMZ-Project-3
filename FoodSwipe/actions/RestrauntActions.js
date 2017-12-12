import{
	FETCH_RESTRAUNTS,
	FETCH_RESTRAUNTS_SUCCESS,
	FETCH_RESTRAUNTS_FAIL,
	UPDATE_RESTRAUNTS,
	API_KEY,
	PLACES_REQUEST,
	PHOTO_REQUEST
} from '../constants/constants';
import RNFetchBlob from 'react-native-fetch-blob'


export const fetchRestraunts = (query) => {
	return (dispatch) => {
	  dispatch({ type: FETCH_RESTRAUNTS, payload: query });

		const request = PLACES_REQUEST + query + API_KEY;

		fetch(request)
			.then((response) => response.json())
			.then(responseJson => setRestrauntData(responseJson))
			.then( (restraunts) => {
				fetchRestrauntsSuccess(dispatch, restraunts)
			})
			.catch(error => {
				dispatch({
					type: FETCH_RESTRAUNTS_FAIL,
					payload: error
				});
			});
		}
}

const setRestrauntData = (response) => {

	let restraunts = response.results.map( async (result, index) => {
		return {
			name: result.name,
			address: result.formatted_address,
			rating: result.rating,
			price: result.price_level,
			photo: await getPhoto(result.photos[0].photo_reference)
		};
	})
	return Promise.all(restraunts)
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


const fetchRestrauntsSuccess = async (dispatch, response) => {

	let restraunts = response.filter(response => response.photo != 'null')

	dispatch({
    type: FETCH_RESTRAUNTS_SUCCESS,
    payload: restraunts
  });
};

export const updateRestraunts = (restraunts) => {
	return {
		type: UPDATE_RESTRAUNTS,
		payload: restraunts
	};
}
