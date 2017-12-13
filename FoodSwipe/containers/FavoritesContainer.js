import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions'

import FavoritesList from '../components/FavoritesList';

const mapStateToProps = (state) => ({
	list: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
	removeFavorite: bindActionCreators(removeFavorite, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList)
