
import { Rating, Tile, Avatar } from 'react-native-elements';


import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
const DOLLAR_IMAGE = require('FoodSwipe/images/dollar_symbol.png');
//designs the inner box for the swipe CardSection
//react elements was heavly used for this section to render the picture and the stars

class RestaurantCard extends React.Component {

	constructor(props) {
		super(props)
	}

	renderStarsRating(rating){
		console.log(rating);
		return (
			<Rating ratingBackgroundColor='red' imageSize={40}
				style={{ paddingVertical: 10 }} fractions={1}
				type="star" startingValue={rating}
			/>
		);
	}

	renderPriceRating(price){
		// Add 1 since values range 0-4
		price += 1;
		return (
			<Rating ratingBackgroundColor='red' imageSize={40}
				style={{ paddingVertical: 10 }} fractions={1}
				type="custom" startingValue={price}
				ratingImage={DOLLAR_IMAGE}
			/>
		);
	}

	render(){
		const restaurant = this.props
		return(
		<View style={[styles.card, {backgroundColor: '#FFC30F'}]}>
			<Tile height={300} width={300}
				 imageSrc={{uri:restaurant.photo}} />
			<Text>{restaurant.name}</Text>
			 { this.renderStarsRating(restaurant.rating)}
			 { this.renderPriceRating(restaurant.price)}
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
