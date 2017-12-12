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
		// this.state = {
		// 	photo: '',
		// 	loading: true
		// }
	}

	// componentDidMount(){
	// 	this.fetchPhoto(this.props.photo;
	// }
  //
	// componentWillReceiveProps(nextProps){
	// 	this.fetchPhoto(this.props.photo[0].photo_reference)
	// }
  //
	// fetchPhoto(photo){
	// 	this.setState({loading:true})
	// 	if (photo) {
  //
  //
  //
	// 	}
	// }
  //
	// loadPhoto(photoInfo){
	// 	var uri = photoInfo.redirects[1]
	// 	this.setState({
	// 		photo: uri,
	// 		loading: false
	// 	})
	// }

	// renderPhoto(photo){
	// 	//'https://lh3.googleusercontent.com/p/AF1QipM6z4oj-tpHbBRT-2GCMXhPcmm8rhfjnblihu27=s1600-w400'
	// 	return(
	// 		// <Image
	// 		// style={{width: 300, height: 400}}
	// 		// source={{uri: photo }}/>
	// 	)
	// }

	render(){
		const restraunt = this.props
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
