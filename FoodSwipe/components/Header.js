/*
Will contain buttons to link to favorites list,
 filter page, &/or home depending on which container
 is being rendered
*/
//import libraries for making a component

import React from 'react';
import { Text, View } from 'react-native';

//make a component
//name same as filename

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
     </View>
  );
};

const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
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


};

// make the component available to ther parts of the app

//only the root compnent uses AppRegistry
//here we have to export statements
//make Header component to other parts of the App
export default Header;
