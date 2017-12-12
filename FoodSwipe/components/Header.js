/*
Will contain buttons to link to favorites list,
 filter page, &/or home depending on which container
 is being rendered
*/
//import libraries for making a component

import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import RouterButton from 'react-router-native-button';

//make a component
//name same as filename

const HeaderComp = (props) => {


  return (
<View>
    <Header
    statusBarProps={{ barStyle: 'light-content' }}
    leftComponent = {    <RouterButton
    to="/favorites"
    title="Back"
    color="#581845"
    accessibilityLabel="Click to navigate to settings"
    />}
    centerComponent={{ text: 'Food Swipe', style: { fontWeight: 'bold', fontFamily: 'Roboto-Bold ', color: '#fff', fontSize: 30 } }}
    outerContainerStyles={{ backgroundColor: '#C70039' }}
    innerContainerStyles={{ justifyContent: 'space-around',} }
    rightComponent = {    <RouterButton
    to="/favorites"
    title="Favorites"
    color="#581845"
    accessibilityLabel="Click to navigate to settings"
    />}
    //this.props.navigation.path
    />



</View>



  );

};




//import custom comp wrap it in link... just make button.

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
