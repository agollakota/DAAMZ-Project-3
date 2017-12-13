import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions'

import FilterPage from '../components/FilterPage';

const mapStateToProps = (state) => ({
	state: state.search
})

const mapDispatchToProps = (dispatch) => ({
	searchForMatches: bindActionCreators(fetchRestaurants, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage)
