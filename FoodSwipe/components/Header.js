/*
Will contain buttons to link to favorites list,
 filter page, &/or home depending on which container
 is being rendered
*/
//import libraries for making a component

import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button, Header } from 'react-native-elements'
import FilterPage from './FilterPage';
import SwipeCards from './SwipeCards'





//make a component
//name same as filename

const HeaderComp = (props) => {


  const { textStyle, viewStyle } = styles;
  return (

    <Header
     leftComponent={{ icon: 'menu' }}
    statusBarProps={{ barStyle: 'light-content' }}
    centerComponent={{ text: 'Food Swipe', style: { color: '#fff' } }}
    outerContainerStyles={{ backgroundColor: 'red' }}
    innerContainerStyles={{ justifyContent: 'space-around',}}


    //this.props.navigation.path
    />





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
