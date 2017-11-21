/*
	ADD_FAVORITE
	REMOVE_FAVORITE
	GET_FAVORITES?
*/
export const favorites = (state = [], action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			// action.id for id
			/* NOTE: Are we stroing the whole restraunt or
							id and then searching restraunt store*/
			// TODO: Call Restraunts
			return; //return new state
		case 'REMOVE_FAVORITE':
			// TODO: Remove from store
			break;
		default:

	}
}
