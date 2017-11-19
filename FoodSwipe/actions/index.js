/*
Action List:

SEARCH_RESTRAUNTS
GET_RESTRAUNT_INFO

NOT_A_MATCH
ADD_FAVORITE
REMOVE_FAVORITE
GET_FAVORITES
*/

// action types
export const SET_RESTRAUNT_FILTER = 'SET_RESTRAUNT_FILTER'
export const GET_RESTRAUNT_INFO = 'GET_RESTRAUNT_INFO'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const NOT_A_MATCH = 'NOT_A_MATCH'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITES = 'GET_FAVORITES'

// Filter constants

export const RestrauntFilters = {
	// Distance
	// Rating
	// Price
}

// action creators
	/* Restraunts */
export function filterRestraunts(/*filter*/){
	// TODO
	return { type: SET_RESTRAUNT_FILTER, filter }
}

export function getRestraunt(/*id*/){
	// TODO
}

	/* List */
export function addFavorite(/*id*/) {
	// TODO
  return { type: ADD_FAVORITE, text }
}

export function noMatch(/*id*/) {
	// TODO
  return { type: NOT_A_MATCH, text }
}

export function removeFavorite(/*id*/) {
	// TODO
  return { type: REMOVE_FAVORITE, text }
}

export function getFavorites(/*?*/) {
	// TODO
  return { type: GET_FAVORITES, text }
}
