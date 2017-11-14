/**

 */

// TODO: Add ReactRouter and Routes
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SwipeCards from './containers/SwipeCards.js'
// TODO: Add FavoritesList & FilterPage

export default class App extends Component<{}> {
	//TODO: Create a home screen? Or shuffle all restraunts
  render() {
    return (
      <View style={styles.container}>
        <SwipeCards style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
