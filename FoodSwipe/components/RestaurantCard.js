import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Spinner from './common/Spinner'
import RNFetchBlob from 'react-native-fetch-blob'



var cardInfo={
	cardName:"",
	cardRating:"",
	cardAddress:""
};
global.cardInfo = cardInfo;

class RestaurantCard extends React.Component {

	constructor(props) {

		super(props)
		this.state = {

			photo: '',
			loading: true
		}
	}

	componentDidMount(){
		this.fetchPhoto(this.props.photo[0].photo_reference);
	}

	componentWillReceiveProps(nextProps){
		this.fetchPhoto(this.props.photo[0].photo_reference)
	}

	fetchPhoto(photo){
		this.setState({loading:true})
		if (photo) {
			const APIkey = '&key=AIzaSyAII5XMnyNX4W5HKvOoASo-qhxvJ5Z0jO0'
			const PhotoRef = '&photoreference=' + photo
			const PhotoRequest = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400' + PhotoRef + APIkey

			RNFetchBlob
				.fetch('GET', PhotoRequest)
				.then((res) => {
					this.loadPhoto(res.info())
				})
				.catch(error => {
					console.log("Caught Error:");
					console.error(error);
				});
		}
	}

	loadPhoto(photoInfo){
		var uri = photoInfo.redirects[1]
		this.setState({
			photo: uri,
			loading: false
		})
	}

	renderPhoto(){
		//'https://lh3.googleusercontent.com/p/AF1QipM6z4oj-tpHbBRT-2GCMXhPcmm8rhfjnblihu27=s1600-w400'
		const photo = this.state.photo
		if (!this.state.loading) {
			return(
				<Image
				style={{width: 300, height: 400}}
				source={{uri: photo }}/>
			)
		}
		else {
		// console.log(photo);
			return(<Spinner />)
		}
	}

getCardName(){
	return cardName;
}
	render(){
		cardName='';
		const restraunt = this.props
		cardInfo.cardName = this.props.name;
		cardInfo.cardRating = this.props.rating;
			var str = this.props.address.replace(/\,/g,"");
		cardInfo.cardAddress = str.split(' ').join('+');


		console.log(cardName);
		return(
		<View style={[styles.card, {backgroundColor: '#0000ff'}]}>
			{this.renderPhoto()}
			 <Text>{restraunt.name}</Text>
			 <Text>{restraunt.rating}</Text>
		 </View>

	 )
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
