import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
	updateRestaurants,
	addFavorite
} from '../actions'

import SwipeCards from '../components/SwipeCards'

const mapStateToProps = (state) => ({
	search: state.search
})

const mapDispatchToProps = (dispatch) => ({
	updateCards: bindActionCreators(updateRestaurants, dispatch),
	addFavorite: bindActionCreators(addFavorite, dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(SwipeCards);
