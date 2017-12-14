import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions'

import FavoritesList from '../components/FavoritesList';

// Maps necessary pieces of state to FavoritesList component
const mapStateToProps = (state) => ({
	favorites: state.favorites
})

// Maps necessary dispatch functions to FavoritesList component
const mapDispatchToProps = (dispatch) => ({
	removeFavorite: bindActionCreators(removeFavorite, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList)
