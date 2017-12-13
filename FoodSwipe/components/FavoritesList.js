import React, {Component} from 'react';
import { List, ListItem, Button, Icon } from 'react-native-elements'
import RouterButton from 'react-router-native-button';
import { StyleSheet, Text, ListView } from 'react-native';
import Communications from 'react-native-communications';

export default class FavoritesList extends Component {
	constructor(props){
		super(props);
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
	return(
		<ListItem title={props.name} subtitle={props.rating}
		leftIcon={ <Icon raised
			name='phone'
			type='font-awesome'
			color='#f50'
			onPress={() => Communications.phonecall('0123456789', true)} />}
			//onPress={Communications.phonecall('0123456789', true)}
		rightIcon={ <Icon raised
			name='map'
			type='font-awesome'
			color='#f50'
			onPress={() => Communications.web('https://www.google.com/maps/place/'+props.address,true)} />}
		/>)
}

  const styles = StyleSheet.create({
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
