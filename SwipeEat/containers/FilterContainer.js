import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions'

import FilterPage from '../components/FilterPage';

// Maps necessary pieces of state to FilterPage component
const mapStateToProps = (state) => ({
	state: state.search
})

// Maps necessary dispatch functions to FilterPage component
const mapDispatchToProps = (dispatch) => ({
	searchForMatches: bindActionCreators(fetchRestaurants, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage)
