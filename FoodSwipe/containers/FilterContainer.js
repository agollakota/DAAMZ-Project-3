import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchRestraunts } from '../actions'

import FilterPage from '../components/FilterPage';

const mapStateToProps = (state) => ({
	state: state.search
})

const mapDispatchToProps = (dispatch) => ({
	searchForMatches: bindActionCreators(fetchRestraunts, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage)
