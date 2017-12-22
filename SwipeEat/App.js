
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {
	NativeRouter,
	Route,
	nativeHistory
} from 'react-router-native'
// import createMemoryHistory from 'history/createMemoryHistory'
import reducer from './reducers'
import thunk from 'redux-thunk'
import HeaderComp from './components/Header'
import FilterContainer from './containers/FilterContainer'
import CardsContainer from './containers/CardsContainer'
import FavoritesContainer from './containers/FavoritesContainer';

const store = createStore(reducer, applyMiddleware(thunk));
//uses route to help the naviagation and the header is also implmenented here
export default class App extends Component{
  render() {
    return (
			<Provider store={store}>
				<NativeRouter history={nativeHistory}>
					<View style={{flex: 1}}>
						<HeaderComp />
						<Route exact path="/" component={FilterContainer}/>
						<Route path="/cards" component={CardsContainer}/>
            <Route path="/favorites" component={FavoritesContainer}/>
					</View>
				</NativeRouter>
			</Provider>
    );
  }
}
