/*
Action List:

FETCH_RESTRAUNTS
NOT_A_MATCH

ADD_FAVORITE
REMOVE_FAVORITE

*/

// TODO: API calls

// action types
export const FETCH_RESTRAUNTS = 'FETCH_RESTRAUNTS'
export const NOT_A_MATCH = 'NOT_A_MATCH'

export const SELECT_RESTRAUNT = 'SELECT_RESTRAUNT'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

// action creators
	/* Restraunts */
export const fetchRestraunts = (filters) => {
	// TODO: Status
	return {
		type: FETCH_RESTRAUNTS,
		status: ,
		filters
	}}

export const selectRestraunt = (id) => {
	return {
		// TODO: 
	}
}

export const noMatch = (id) => {
  return{
		type: NOT_A_MATCH,
		id
	}}

	/* Favorites */
export const addFavorite = (restraunt) => {
  return{
		type: ADD_FAVORITE,
		restraunt
	}}

export const removeFavorite = (id) => {
  return{
		type: REMOVE_FAVORITE,
		id
	}}
