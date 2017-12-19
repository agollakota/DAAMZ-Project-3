import React, {Component} from 'react';
import { List, ListItem, Button, Icon } from 'react-native-elements'
import RouterButton from 'react-router-native-button';
import { StyleSheet, Text, ListView } from 'react-native';
import Communications from 'react-native-communications';

export default class FavoritesList extends Component {
	//favorites takes in what the user swipes 'yum' on
	constructor(props){
		super(props) //we do this cause we want to access this inside the constructor
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      dataSource: ds.cloneWithRows(this.props.favorites.list),
    };
	}

	render() {
		return (
			<ListView style={styles.favoritesContainer}
				dataSource={this.state.dataSource}
				renderRow={(data) => <Row {...data} />}
			/>
	);}
}

//Uses react-native-elements to generate the ListItem style and the map button
// Also uses communications to open the browsers to search for the location of the restaurant
const Row = ( props ) => {
	var f =props.address.replace(/,\s?/g, "");;
	var newAddress = f.split(' ').join('+');
	return(
		<ListItem title={props.name} subtitle={props.rating}
			leftIcon={ <Icon raised
				name='map'
				type='font-awesome'
				color='#f50'
				onPress={() => Communications.web('https://www.google.com/maps/place/'+newAddress,true)} />}
		/>)
}

const styles = StyleSheet.create({ //favorites list style
  favoritesContainer: {
   flex: 1,
   paddingTop: 12
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
})
