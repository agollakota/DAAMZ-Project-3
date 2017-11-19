import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native'

import SwipeCards from './containers/FavoritesList.js'
import SwipeCards from './containers/FilterPage.js'
import SwipeCards from './containers/SwipeCards.js'

export default class App extends Component<{}> {
	//TODO: Create a home screen? Or shuffle all restraunts
  render() {
    return (
			<NativeRouter>
				<Route exact path="/" component={Home}/>
				<Route path="/filters" component={About}/>
				<Route path="/topics" component={Topics}/>
			</NativeRouter>

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
