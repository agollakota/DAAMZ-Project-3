import React, {Component} from 'react';
import { List, ListItem, Button, Icon } from 'react-native-elements'
import RouterButton from 'react-router-native-button';
import { StyleSheet, Text, ListView } from 'react-native';
import Communications from 'react-native-communications';


//favorites takes in what the user swipes yum on
//this uses react elements to generate the list style and the map button
//also uses communications to open the browsers to search for the location of the restaurant

export default class FavoritesList extends Component {
	constructor(props){ //constructor
		super(props) //we do this cause we want to access this inside the constructor
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      dataSource: ds.cloneWithRows(this.props.list.favorites),
    };
	}

	render() {
		return (
			<ListView style={styles.container}
				dataSource={this.state.dataSource}
				renderRow={(data) => <Row {...data} />}
			/>
	);}
}

const Row = ( props ) => {
	var f =props.address.replace(/,\s?/g, "");;
	var newAddress = f.split(' ').join('+');
	return(
		<ListItem title={props.name} subtitle={props.rating}

			//onPress={Communications.phonecall('0123456789', true)}
		leftIcon={ <Icon raised
			name='map'
			type='font-awesome'
			color='#f50'
			onPress={() => Communications.web('https://www.google.com/maps/place/'+newAddress,true)} />}
		/>)
}

  const styles = StyleSheet.create({ //favorites list style
    container: {
     flex: 1,
     paddingTop: 12
    },
    item: {
      padding: 10,
      fontSize: 20,
      height: 44,
    },
  })
