import{
	FETCH_RESTRAUNTS,
	FETCH_RESTRAUNTS_SUCCESS,
	FETCH_RESTRAUNTS_FAIL,
	UPDATE_RESTRAUNTS
} from './types';

export const fetchRestraunts =  (query) => {
	// return (dispatch) => {
  //   dispatch({ type: LOGIN_USER });
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

const fetchRestrauntsSuccess = (dispatch, search) => {
  dispatch({
    type: FETCH_RESTRAUNTS_SUCCESS,
    payload: search.results
  });
};

export const updateRestraunts = (restraunts) => {
	return {
		type: UPDATE_RESTRAUNTS,
		payload: restraunts
	};
}
