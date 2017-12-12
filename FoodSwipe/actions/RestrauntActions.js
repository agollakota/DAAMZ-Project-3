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
			.then(responseJson => {
				fetchRestrauntsSuccess(dispatch, responseJson);
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
	let restraunts = response.results.map((result, index) => {
		return {
			name: result.name,
			address: result.formatted_address,
			rating: result.rating,
			price: result.price_level,
			photo: result.photos
		};
	})

	restraunts.map((restraunt, index) => {
		const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'
		const PhotoRef = '&photoreference=' + restraunt.photo[0].photo_reference
		const PhotoRequest = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400' + PhotoRef + APIkey
		RNFetchBlob
			.fetch('GET', PhotoRequest)
			.then((res) => {
				console.log(res);
				restraunts[index].photo = res;
			})
			.catch(error => {
				console.log("Caught Error:");
				console.error(error);
			});
	})

	return restraunts
}

const fetchRestrauntsSuccess = async (dispatch, response) => {
	const restraunts = await setRestrauntData(response)
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
