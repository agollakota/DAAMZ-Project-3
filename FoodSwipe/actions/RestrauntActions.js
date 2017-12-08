import{
	FETCH_RESTRAUNTS,
	FETCH_RESTRAUNTS_SUCCESS,
	FETCH_RESTRAUNTS_FAIL,
	UPDATE_RESTRAUNTS
} from '../constants/types';

const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'

export const fetchRestraunts =  (query) => {
	return (dispatch) => {
	  dispatch({ type: FETCH_RESTRAUNTS, payload: query });
		const PlacesRequest = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' + query + APIkey;

		fetch(PlacesRequest)
			.then((response) => response.json())
			.then(responseJson => {
				fetchRestrauntsSuccess(dispatch, responseJson);
			})
			.catch(error => {
				fetchRestrauntsFail(dispatch, error);
			});
		}
}

const fetchRestrauntsFail = (dispatch, error) => {
  dispatch({
		type: FETCH_RESTRAUNTS_FAIL,
		payload: error
	});
};

const fetchPhoto = (photoReference) => {
	const PhotoRef = '&photoreference=' + photoReference
	const PhotoRequest = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400' + PhotoRef + APIkey
	fetch(PhotoRequest)
		.then((response) => response.blob())
		.then(responseBlob) => {
			fetchPhotos(dispatch, responseJson)
		}
}

const fetchRestrauntsSuccess = (dispatch, response) => {
	let restraunts = response.results.map((result, index) => {
		return {
			name: result.name,
			address: result.formatted_address,
			rating: result.rating,
			price: result.price_level,
			photo: result.photos[0].photo_reference
		};

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
