import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import RouterButton from 'react-router-native-button';

// No longer needed

export default class NavHeader extends React.Component {
  constructor(props){
    super(props);
  }
render(){
  return (
		<View>
		    <Header
		    statusBarProps={{ barStyle: 'light-content' }}
		    leftComponent = {    <RouterButton
		    to="/"
		    title="Back"
		    color="#581845"
		    accessibilityLabel="Click to navigate to settings"
		    />}
		    centerComponent={{ text: 'Food Swipe', style: { fontWeight: 'bold', color: '#fff', fontSize: 30 } }}
		    outerContainerStyles={{ backgroundColor: '#C70039' }}
		    innerContainerStyles={{ justifyContent: 'space-around',} }
		    rightComponent = { <RouterButton
		    to="/cards"
		    title="Favorites"
		    color="#581845"
		    accessibilityLabel="Click to navigate to settings"
		    />}
		    />
		</View>);
	}
};
