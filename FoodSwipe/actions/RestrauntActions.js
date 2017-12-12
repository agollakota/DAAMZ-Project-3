import{
	FETCH_RESTRAUNTS,
	FETCH_RESTRAUNTS_SUCCESS,
	FETCH_RESTRAUNTS_FAIL,
	UPDATE_RESTRAUNTS
} from '../constants/types';
import RNFetchBlob from 'react-native-fetch-blob'


export const fetchRestraunts = (query) => {
	return (dispatch) => {
	  dispatch({ type: FETCH_RESTRAUNTS, payload: query });
		const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'
		const PlacesRequest = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' + query + APIkey;

		fetch(PlacesRequest)
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

		const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'
		const PhotoRef = '&photoreference=' + photo
		const PhotoRequest = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400' + PhotoRef + APIkey

		return RNFetchBlob
			.fetch('GET', PhotoRequest)
			.then((res) => {
				return res.info().redirects[1]
			})
			.catch(error => {
				console.log("Caught Error:");
				console.error(error);
			});
		}


const fetchRestrauntsSuccess = async (dispatch, response) => {
	dispatch({
    type: FETCH_RESTRAUNTS_SUCCESS,
    payload: response
  });
};

export const updateRestraunts = (restraunts) => {
	return {
		type: UPDATE_RESTRAUNTS,
		payload: restraunts
	};
}
