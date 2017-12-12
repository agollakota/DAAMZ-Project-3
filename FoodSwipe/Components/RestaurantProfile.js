import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Header from './FoodSwipe/Components/Header';

export default class RestaurantProfile extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor = '#000',
  }
});

AppRegistry.registerComponent('RestaurantProfile', () => RestaurantProfile);
