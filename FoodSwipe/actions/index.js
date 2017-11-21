/*
Action List:

SEARCH_RESTRAUNTS
NOT_A_MATCH

ADD_FAVORITE
REMOVE_FAVORITE

*/

// action types
export const FETCH_RESTRAUNTS = 'FETCH_RESTRAUNTS'
export const NOT_A_MATCH = 'NOT_A_MATCH'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

// Filter constants

export const RestrauntFilters = {
	// Type
	// Distance?
	// Rating?
	// Price
}

// action creators
	/* Restraunts */
export function fecthRestraunts(/*filter*/){
	// TODO
	return { type: FETCH_RESTRAUNTS, filter }
}

export function noMatch(/*id*/) {
	// TODO
  return { type: NOT_A_MATCH, text }
}

	/* List */
export function addFavorite(/*id*/) {
	// TODO
  return { type: ADD_FAVORITE, text }
}

export function removeFavorite(/*id*/) {
	// TODO
  return { type: REMOVE_FAVORITE, text }
}
