import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Spinner from './common/Spinner'

class RestaurantCard extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		const restraunt = this.props
		console.log(restraunt);
		return(
		<View style={[styles.card, {backgroundColor: '#0000ff'}]}>
			 <Text>{restraunt.name}</Text>
			 <Text>{restraunt.rating}</Text>
		 </View>)
	}
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
		minWidth: 350,
		marginTop: 25,
		marginHorizontal: 25,
		marginBottom: 50,
  },
})

export default RestaurantCard;
