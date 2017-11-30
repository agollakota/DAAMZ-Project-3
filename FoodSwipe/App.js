import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'

// import reducer from './reducers'
// import { getAllProducts } from './actions'

// import FavoritesList from './containers/FavoritesList'
import FilterPage from './components/FilterPage'
// import SwipeCards from './containers/SwipeCards'

// import Styles from './style/Styles.js'

// const Cards = () => (
// 	<View style={styles.cards}>
// 		<SwipeCards />
// 	</View>
// );

export default class App extends Component{
	// let store = createStore(reducer)
	// store.dispatch(getAllRestraunts())

  render() {
    return (
				<NativeRouter>
					<View style={styles.containers}>
						<Route exact path="/" component={FilterPage}/>
					</View>
				</NativeRouter>
    );
  }
}
// <Provider store={store}>
// <Route exact path="/" component={Cards}/>
// <Route path="/favorites" component={FavoritesList}/>

const styles = StyleSheet.create({
	containers: {
		flex: 1
	},
	cards: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
