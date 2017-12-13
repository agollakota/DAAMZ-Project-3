import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import { Rating } from 'react-native-elements';


class RestaurantCard extends React.Component {

	constructor(props) {
		super(props)
	}


	render(){
		const restaurant = this.props
		return(
		<View style={[styles.card, {backgroundColor: '#0000ff'}]}>
			 <Text>{restaurant.name}</Text>
			
			 <Rating
			   showRating
			   type="star"
			   fractions={1}
			   startingValue={restaurant.rating}
			   imageSize={40}
			   onFinishRating={restaurant.rating}
			   style={{ paddingVertical: 10 }}
			 />
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
