import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'

import reducer from './reducers'

import Header from './components/Header'
import FilterPage from './components/FilterPage'
import CardsContainer from './containers/CardsContainer'
// import FavoritesList from './containers/FavoritesList'

export default class App extends Component{
	// const store = createStore(reducer)
  // <Provider store={store}>

  render() {
    return (

				<NativeRouter>
					<View style={{flex: 1}}>
						<Header headerText={"Food Swipe"}/>
						<Route exact path="/" component={FilterPage}/>
						<Route path="/cards" component={CardsContainer}/>
					</View>
				</NativeRouter>

    );
  }
}
// TODO: <Route path="/favorites" component={FavoritesList}/>
