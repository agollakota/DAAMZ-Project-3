import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
	removeRestaurant,
	addFavorite
} from '../actions'

import SwipeCards from '../components/cards/SwipeCards'

// Maps necessary pieces of state to SwipeCards component
const mapStateToProps = (state) => ({
	search: state.search
})

// Maps necessary dispatch functions to SwipeCards component
const mapDispatchToProps = (dispatch) => ({
	removeCard: bindActionCreators(removeRestaurant, dispatch),
	addFavorite: bindActionCreators(addFavorite, dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(SwipeCards);
