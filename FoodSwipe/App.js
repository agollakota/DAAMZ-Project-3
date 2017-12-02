import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'

// import reducer from './reducers'
// import { getAllProducts } from './actions'

// import FavoritesList from './containers/FavoritesList'
import Header from './Components/Header'
import FilterPage from './Components/FilterPage'
import SwipeCards from './containers/SwipeCards'
import CheckBox from 'react-native-check-box'
import RestaurantCard from './Components/RestaurantCard'
import reducers from './reducers';

// import Styles from './style/Styles.js'

const Cards = () => (
	<Provider store={createStore(reducers)}>
   <View style={{ flex: 1 }}>
		<Header headerText="Tech Stack" />
		<RestaurantCard />
	</View>
</Provider>
);

export default class App extends Component{

  render() {
    return (

				<NativeRouter>
					<View style={styles.containers}>
						<Header headerText={"Food Swipe"}/>
						<Route exact path="/" component={FilterPage}/>
						<Route path="/cards" component={Cards}/>
					</View>
				</NativeRouter>

    );
  }
}
// TODO: <Route path="/favorites" component={FavoritesList}/>
// <Provider store={createStore(reducer)}>
// </Provider>

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
