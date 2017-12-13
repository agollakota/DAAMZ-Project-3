import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

class RestaurantCard extends React.Component {

	constructor(props) {
		super(props)
	}

	render(){
		const restaurant = this.props
		return(
		<View style={[styles.card, {backgroundColor: '#0000ff'}]}>
			 <Text>{restaurant.name}</Text>
			 <Text>{restaurant.rating}</Text>
		 </View>)
	}
}

const styles = StyleSheet.create({ //restaurantcard style
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
