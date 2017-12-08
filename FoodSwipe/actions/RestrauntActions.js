import{
	FETCH_RESTRAUNTS,
	FETCH_RESTRAUNTS_SUCCESS,
	FETCH_RESTRAUNTS_FAIL,
	UPDATE_RESTRAUNTS
} from '../constants/types';

export const fetchRestraunts =  (query) => {
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

const fetchRestrauntsSuccess = (dispatch, response) => {
	let restraunts = response.results.map((result, index) => {
		return {
			name: result.name,
			address: result.formatted_address,
			rating: result.rating,
			price: result.price_level,
			photo: result.photos
		};
	})

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
