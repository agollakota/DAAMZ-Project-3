/**
Will contain buttons to link to favorites list,
 filter page, &/or home depending on which container
 is being rendered
**/
//import libraries for making a component

import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import RouterButton from 'react-router-native-button';
//make a component
//name same as filename

class HeaderComp extends React.Component {
  constructor(props){
    super(props);
  }
	render(){
	  return (
		<View>
	    <Header
	    statusBarProps={{ barStyle: 'light-content' }}
	    leftComponent = { }
	    centerComponent={{ text: 'Food Swipe', style: { fontWeight: 'bold', fontFamily: 'Roboto-Bold ', color: '#fff', fontSize: 30 } }}
	    outerContainerStyles={{ backgroundColor: '#C70039' }}
	    innerContainerStyles={{ justifyContent: 'space-around',} }
	    rightComponent = { <RouterButton
			  to="/favorites"
			  title="Favorites"
			  color="#581845"
			  accessibilityLabel="Click to navigate to settings"
		  /> }
	    />
		</View>
	)}
}
/**
 *

 <Header
 statusBarProps={{ barStyle: 'light-content' }}
 leftComponent = {    <RouterButton
 to="/"
 title="Search"
 color="#581845"
 accessibilityLabel="Click to navigate to settings"
 />}
 centerComponent={{ text: 'Food Swipe', style: { fontWeight: 'bold', fontFamily: 'Roboto-Bold ', color: '#fff', fontSize: 30 } }}
 outerContainerStyles={{ backgroundColor: '#C70039' }}
 innerContainerStyles={{ justifyContent: 'space-around',} }
 rightComponent = { <RouterButton
 to="/favorites"
 title="Favorites"
 color="#581845"
 accessibilityLabel="Click to navigate to settings"
 />

 //for favorites no right
 <Header
 statusBarProps={{ barStyle: 'light-content' }}
 leftComponent = {    <RouterButton
 to="/cards"
 title="Back"
 color="#581845"
 accessibilityLabel="Click to navigate to settings"
 />}
 centerComponent={{ text: 'Food Swipe', style: { fontWeight: 'bold', fontFamily: 'Roboto-Bold ', color: '#fff', fontSize: 30 } }}
 outerContainerStyles={{ backgroundColor: '#C70039' }}
 innerContainerStyles={{ justifyContent: 'space-around',} }
 //this.props.navigation.path
 />



//cards left favorites right
<Header
statusBarProps={{ barStyle: 'light-content' }}
leftComponent = {    <RouterButton
to="/cards"
title="Cards"
color="#581845"
accessibilityLabel="Click to navigate to settings"
/>}
centerComponent={{ text: 'Food Swipe', style: { fontWeight: 'bold', fontFamily: 'Roboto-Bold ', color: '#fff', fontSize: 30 } }}
outerContainerStyles={{ backgroundColor: '#C70039' }}
innerContainerStyles={{ justifyContent: 'space-around',} }
rightComponent = { <RouterButton
to="/favorites"
title="Favorites"
color="#581845"
accessibilityLabel="Click to navigate to settings"
/>}
//this.props.navigation.path
/>
 */

const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  //increase Text
  textStyle: {
    fontSize: 30
  }

 //name


//restrauntpicture

 //picture placement


};

// make the component available to ther parts of the app

//only the root compnent uses AppRegistry
//here we have to export statements
//make Header component to other parts of the App
export default HeaderComp;
