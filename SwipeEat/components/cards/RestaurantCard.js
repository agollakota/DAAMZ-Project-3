
import { Rating, Tile } from 'react-native-elements';
import React, { Component } from 'react'
import {
	Text,
	View,
	Image
} from 'react-native';
import styles from '../../constants/styles'
import { DOLLAR_IMAGE_BLUE } from '../../constants/constants'
//designs the inner box for the swipe CardSection
//react elements was heavly used for this section to render the picture and the stars

class RestaurantCard extends React.Component {

	constructor(props) {
		super(props)
	}

	renderStarsRating(rating){
		return (
			<Rating ratingBackgroundColor='red' imageSize={40}
				style={{ paddingVertical: 10 }} fractions={1} readonly
				type="star" startingValue={rating}
				ref={(input) => { this.ratingInput = input; }}
				style={{overflow: 'hidden', borderRadius: 7}}
			/>
		);
	}

	renderPriceRating(price){
		// Add 1 since values range 0-4
		price += 1;
		return (
			<Rating ratingBackgroundColor='red' imageSize={40}
				style={{ paddingVertical: 10 }} fractions={1} readonly
				type="custom" startingValue={price}
				ratingImage={DOLLAR_IMAGE_BLUE} ratingColor="#397031"
				ratingBackgroundColor="white"
				ref={(input) => { this.priceInput = input; }}
			/>
		);
	}

// Bug fix for iOS: Rating components were not updating
	componentWillReceiveProps(nextProps){
		// References setCurrentRating function to update component
		this.ratingInput.setCurrentRating(nextProps.rating)
		this.priceInput.setCurrentRating(nextProps.price + 1)
	}

	render(){
		const restaurant = this.props
		return(
		<View style={styles.card}>
			<Tile height={300} width={300}
				 imageSrc={{uri:restaurant.photo}}
				 imageContainerStyle={{overflow: 'hidden', borderRadius: 8}}/>
			<Text style={styles.cardTitle}>{restaurant.name}</Text>
			 { this.renderStarsRating(restaurant.rating)}
			 { this.renderPriceRating(restaurant.price)}
		 </View>)
	}
}

export default RestaurantCard;
