import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
	removeRestaurant,
	addFavorite
} from '../actions'

import SwipeCards from '../components/SwipeCards'

const mapStateToProps = (state) => ({
	search: state.search
})

const mapDispatchToProps = (dispatch) => ({
	removeCard: bindActionCreators(removeRestaurant, dispatch),
	addFavorite: bindActionCreators(addFavorite, dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(SwipeCards);
