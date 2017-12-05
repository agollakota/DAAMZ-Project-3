import{
	FETCH_RESTRAUNTS,
	FETCH_RESTRAUNTS_SUCCESS,
	FETCH_RESTRAUNTS_FAIL,
	UPDATE_RESTRAUNTS
} from '../constants/types';

export const fetchRestraunts =  (query) => {
	return (dispatch) => {
	  dispatch({ type: FETCH_RESTRAUNTS });
		const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'
		const PlacesRequest = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' + query + APIkey;

		fetch(PlacesRequest)
			.then((response) => response.json())
			.then(responseJson => {
				console.log("Respose: " + responseJson.results);
			})
			.catch(error => {
				console.log("Error: " + error);
			});
  //
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(user => loginUserSuccess(dispatch, user))
  //     .catch((error) => {
  //       console.log(error);
  //
  //       firebase.auth().createUserWithEmailAndPassword(email, password)
  //         .then(user => loginUserSuccess(dispatch, user))
  //         .catch(() => loginUserFail(dispatch));
  //     });
  // };
};


const fetchRestrauntsFail = (dispatch) => {
  dispatch({ type: FETCH_RESTRAUNTS_FAIL });
};

const fetchRestrauntsSuccess = (dispatch, response) => {
  dispatch({
    type: FETCH_RESTRAUNTS_SUCCESS,
    payload: response.results
  });
};

export const updateRestraunts = (restraunts) => {
	return {
		type: UPDATE_RESTRAUNTS,
		payload: restraunts
	};
}
