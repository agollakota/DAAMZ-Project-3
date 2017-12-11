
import React, { Component } from 'react';
import { View, } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route, Scene } from 'react-router-native'
import thunk from 'redux-thunk'

import reducer from './reducers'

import Header from './components/Header'
import FilterContainer from './containers/FilterContainer'
import CardsContainer from './containers/CardsContainer'

import FavoritesList from './components/FavoritesList';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component{
  render() {
    return (
			<Provider store={store}>

				<NativeRouter>
					<View style={{flex: 1}}>
						<Header headerText={"Food Swipe"}/>
						<Route exact path="/" component={FilterContainer}/>
						<Route path="/cards" component={CardsContainer}/>
            <Route path="/favorites" component={FavoritesList}/>

					</View>
				</NativeRouter>
			</Provider>
    );
  }
}
// TODO: <Route path="/favorites" component={FavoritesList}/>
