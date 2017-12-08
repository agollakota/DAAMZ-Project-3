import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { updateRestraunts } from '../actions'

import SwipeCards from '../components/SwipeCards'

const mapStateToProps = (state) => ({
	search: state.search
})

const mapDispatchToProps = (dispatch) => ({
	updateCards: bindActionCreators(updateRestraunts, dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(SwipeCards);
