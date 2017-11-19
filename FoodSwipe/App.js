import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'

import FavoritesList from './containers/FavoritesList.js'
import FilterPage from './containers/FilterPage.js'
import SwipeCards from './containers/SwipeCards.js'

import Styles from './style/Styles.js'

export default class App extends Component<{}> {
	let store = createStore(/* */)

	const Cards =  () => (
	  <View style={styles.cards}>
	    </SwipeCards>
	  </View>
	)

  render() {
    return (
			<Provider store={store}>
				<NativeRouter>
					<Route exact path="/" component={Cards}/>
					<Route path="/filters" component={FilterPage}/>
					<Route path="/favorites" component={FavoritesList}/>
				</NativeRouter>
			</Provider>
    );
  }
}
