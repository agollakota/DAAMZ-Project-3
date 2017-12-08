import{
	FETCH_PHOTO,
	FETCH_PHOTO_SUCCESS,
	FETCH_PHOTO_FAIL
} from '../constants/types';

const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'

export const fetchPhoto = (photoReference) => {
	return (dispatch) => {
	  dispatch({ type: FETCH_PHOTO });
		const PhotoRef = '&photoreference=' + photoReference
		const PhotoRequest = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400' + PhotoRef + APIkey
		fetch(PhotoRequest)
			.then((response) => response.blob())
			.then((responseBlob) => {
				dispatch({
						type: FETCH_PHOTO_SUCCESS,
						payload: responseBlob
					})
				})
			.catch(error => {
				dispatch({
					type: FETCH_PHOTO_FAIL,
					payload: error
				});
			});
	}
}
