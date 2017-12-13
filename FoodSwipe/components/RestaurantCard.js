
import { Rating, Tile } from 'react-native-elements';


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
		<View style={[styles.card, {backgroundColor: '#FFC30F'}]}>


			 <Text>{restaurant.name}</Text>
			 <Rating

				 type="star"
				 fractions={1}
				 startingValue={restaurant.rating}
				 ratingBackgroundColor='red'
				 imageSize={40}

				 style={{ paddingVertical: 10 }}
			 />
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
